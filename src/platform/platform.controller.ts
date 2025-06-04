import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PlatformService } from './platform.service';
import { PlatformDto } from './platform.dto';

@Controller('platforms')
export class PlatformController {
  constructor(private platformService: PlatformService) {}

  @Get()
  findAll() {
    return this.platformService.findAll();
  }

  @Post()
  @HttpCode(201)
  create(@Body() platformDto: PlatformDto) {
    return this.platformService.create(platformDto);
  }

  // platforms/auid-d9123-9092131 -> id
  @Put(':id')
  update(@Body() platformDto: PlatformDto, @Param('id') platformId: string) {
    return this.platformService.update(platformId, platformDto);
  }

  // platforms/auid-d9123-9092131 -> id
  @Get(':id')
  findById(@Param('id') platformId: string) {
    return this.platformService.findById(platformId);
  }

  // platforms/auid-d9123-9092131 -> id
  @Delete(':id')
  // @HttpCode(204)
  remove(@Param('id') platformId: string) {
    return this.platformService.remove(platformId);
  }
}
