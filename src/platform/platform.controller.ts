import { Controller, Get } from "@nestjs/common";
import { PlatformService } from "./platform.service";

@Controller('platforms')
export class PlatformController {

    constructor(private platformService: PlatformService) { }

    @Get()
    findAll() {
        return this.platformService.findAll();
    }

}