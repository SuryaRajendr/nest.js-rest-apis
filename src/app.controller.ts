import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello') // users/hello
  getHello(): string {
    return this.appService.getHello();
  }

  @Get() // users
  findAll() {
    return []
  }

  @Get(':id') // users/:id
  findOne(@Param('id') id:String) {
    return { id}
  }

  @Post() 
  create(@Body() user: {}) {
    return user
  }
}
