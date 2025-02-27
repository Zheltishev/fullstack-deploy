import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

interface IAnswer {
  text: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  nestjsStarted(): IAnswer {
    return this.appService.nestjsStarted();
  }
}
