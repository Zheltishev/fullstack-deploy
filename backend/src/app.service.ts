import { Injectable } from '@nestjs/common';

interface IAnswer {
  status: number;
  text: string;
}

@Injectable()
export class AppService {
  nestjsStarted(): IAnswer {
    return {
      status: 200,
      text: 'nestjs has been started',
    };
  }
}
