import { Controller, Get, Res, Param } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {

  @Get()
  getIndex(@Res() res: Response) {
    res.sendFile('index.html', { root: 'public' });
  }

  @Get('public/*')
  getFile(@Param('0') path: string, @Res() res: Response) {
    res.sendFile(path, { root: 'public' });
  }
}
