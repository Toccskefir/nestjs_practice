import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  getSecret(username: any, password: any): string {
    return `Felhasználónév: ${username} Jelszó: ${password}`;
  }
}
