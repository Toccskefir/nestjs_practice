import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
  private readonly users: User[] = [
    {
      userId: '1',
      username: 'john',
      password: 'changeme',
      roles: ['admin'],
    },
    {
      userId: '2',
      username: 'maria',
      password: 'guess',
      roles: [],
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
