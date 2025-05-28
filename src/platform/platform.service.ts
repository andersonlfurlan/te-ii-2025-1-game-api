import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PlatformEntity } from "./platform.entity";
import { Repository } from "typeorm";

@Injectable()
export class PlatformService {

  constructor(
    @InjectRepository(PlatformEntity)
    private platformRepository: Repository<PlatformEntity>,
  ) { }

  findAll() {
    return this.platformRepository.find();
  }
}