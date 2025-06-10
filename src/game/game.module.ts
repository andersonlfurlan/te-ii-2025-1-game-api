import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameEntity } from './game.entity';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { PlatformEntity } from '../platform/platform.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GameEntity, PlatformEntity])],
  controllers: [GameController],
  providers: [GameService],
})
export class GameModule {}
