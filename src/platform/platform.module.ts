import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlatformEntity } from './platform.entity';
import { PlatformController } from './platform.controller';
import { PlatformService } from './platform.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PlatformEntity
    ])
  ],
  controllers: [PlatformController],
  providers: [PlatformService]
})
export class PlatformModule { }
