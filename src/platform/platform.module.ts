import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlatformEntity } from './platform.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PlatformEntity
    ])],
})
export class PlatformModule { }
