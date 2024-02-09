import { Controller, Get, Param } from '@nestjs/common';
import { PageService } from './page.service';

@Controller()
export class PageController {
  constructor(private readonly pageService: PageService) {}

  @Get('/oldal/:page')
  getPage(@Param('page') page): string {
    return this.pageService.getPage(page);
  }
}
