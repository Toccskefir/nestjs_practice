import { Injectable } from '@nestjs/common';

@Injectable()
export class PageService {
  getPage(page: string): string {
    return 'Az oldal: ' + page;
  }
}
