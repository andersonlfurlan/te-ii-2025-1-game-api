import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameEntity } from './game.entity';
import { GameDto } from './game.dto';
import { PlatformEntity } from '../platform/platform.entity';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(GameEntity)
    private gameRepository: Repository<GameEntity>,
    @InjectRepository(PlatformEntity)
    private platformRepository: Repository<PlatformEntity>,
  ) {}

  async findAll() {
    return await this.gameRepository.find({ relations: ['platforms'] });
  }

  async findById(id: string) {
    const game = await this.gameRepository.findOne({
      where: { id },
      relations: ['platforms'],
    });
    if (!game) throw new NotFoundException('Jogo não encontrado');
    return game;
  }

  async create(gameDto: GameDto) {
    await this.validateBusinessRules(gameDto);
    const platforms = await this.platformRepository.findByIds(
      gameDto.platforms,
    );
    const game = this.gameRepository.create({ ...gameDto, platforms });
    return this.gameRepository.save(game);
  }

  async update(id: string, gameDto: GameDto) {
    const game = await this.findById(id);
    await this.validateBusinessRules(gameDto, id);
    const platforms = await this.platformRepository.findByIds(
      gameDto.platforms,
    );
    Object.assign(game, { ...gameDto, platforms });
    return this.gameRepository.save(game);
  }

  async remove(id: string) {
    const game = await this.findById(id);
    await this.gameRepository.remove(game);
    return { ...game, id };
  }

  private async validateBusinessRules(gameDto: GameDto, idToIgnore?: string) {
    // Nome do jogo não pode se repetir
    const existing = await this.gameRepository.findOne({
      where: { title: gameDto.title },
    });
    if (existing && existing.id !== idToIgnore) {
      throw new BadRequestException('Já existe um jogo com esse nome');
    }
    // Data de lançamento > 1950
    const year = new Date(gameDto.launchDate).getFullYear();
    if (year <= 1950) {
      throw new BadRequestException(
        'A data de lançamento deve ser maior que 1950',
      );
    }
    // Preço > 100 se categoria for CORRIDA
    if (
      gameDto.category.toLowerCase() === 'corrida' &&
      Number(gameDto.price) <= 100
    ) {
      throw new BadRequestException(
        'O preço deve ser maior que 100,00 para jogos de corrida',
      );
    }
  }
}
