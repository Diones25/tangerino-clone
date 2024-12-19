import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  home() {
    const users = [
      {
        name: 'Diones',
        address: 'Rua Francisca Carla',
        age: 34
      },
      {
        name: 'Maria',
        address: 'Avenida Brasil',
        age: 28
      }
    ];
    return { users };
  }
}
