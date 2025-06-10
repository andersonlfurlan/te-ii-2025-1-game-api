import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { GameService } from './game.service';
import { GameDto } from './game.dto';

@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  findAll() {
    return this.gameService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.gameService.findById(id);
  }

  @Post()
  @HttpCode(201)
  create(@Body() gameDto: GameDto) {
    return this.gameService.create(gameDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() gameDto: GameDto) {
    return this.gameService.update(id, gameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gameService.remove(id);
  }
}
