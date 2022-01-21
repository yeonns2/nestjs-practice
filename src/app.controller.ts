import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello/:id')
  getHello(@Req() req: Request , @Body() Body, @Param() param): string {
    console.log(param);
    console.log(req);
    return this.appService.getHello();
  }
}
