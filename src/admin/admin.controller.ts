import { Controller, Get, Query } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller()
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('/titkos')
  getSecret(@Query() query: any): string {
    if (
      typeof query.name === 'undefined' ||
      typeof query.password === 'undefined'
    ) {
      return 'Adjon meg felhasználónevet és jelszót!';
    } else {
      return this.adminService.getSecret(query.name, query.password);
    }
  }
}
