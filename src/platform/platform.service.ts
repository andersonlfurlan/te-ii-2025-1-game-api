import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlatformEntity } from './platform.entity';
import { Repository } from 'typeorm';
import { PlatformDto } from './platform.dto';

@Injectable()
export class PlatformService {

  constructor(
    @InjectRepository(PlatformEntity)
    private platformRepository: Repository<PlatformEntity>,
  ) { }

  findAll() {
    return this.platformRepository.find();
  }

  create(platformDto: PlatformDto) {
    const platformEntity = this.platformRepository.create(platformDto);
    return this.platformRepository.save(platformEntity);
  }

  update(platformId: string, platformDto: PlatformDto) {
    // return this.platformRepository.update({ id: platformId }, platformDto);
    return this.platformRepository.save({
      ...platformDto,
      id: platformId,
    });
  }

  async findById(platformId: string) {
    const find = await this.platformRepository.findOne({
      where: { id: platformId },
    });
    if (find === null) {
      // throw new BadRequestExcepion
      // throw new UnprocessableEntityException
      throw new NotFoundException(
        'Platforma com ID ' + platformId + ' não encontrada!',
      );
    }
    return find;
  }

  async remove(platformId: string) {
    // return this.platformRepository.delete({ id: platformId })
    const find = await this.findById(platformId);
    // return this.platformRepository.remove(find);
    await this.platformRepository.remove(find);
    return { ...find, id: platformId };
  }
}
