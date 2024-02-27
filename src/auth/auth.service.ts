import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { IsString } from 'class-validator';
import { JwtService } from '@nestjs/jwt';
import { Role } from '../user/user.model';

export interface UserData {
  sub: string;
  username: string;
  roles: Role[];
}

export class SignInDto {
  @IsString()
  username!: string;
  @IsString()
  password!: string;
}

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ accessToken: string }> {
    const user = await this.usersService.findOne(username);
    if (!user || user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload: UserData = {
      sub: user.userId,
      username: user.username,
      roles: user.roles,
    };
    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
