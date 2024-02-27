import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService, SignInDto, UserData } from './auth.service';
import { AuthGuard } from './auth.guard';
import { Request } from 'express';
import { WithRole } from "./with-role.decorator";

interface RequestWithUser extends Request {
  user: UserData;
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Req() req: RequestWithUser) {
    const user: UserData = req.user;
    return user.username;
  }

  @UseGuards(AuthGuard)
  @WithRole('admin')
  @Get('admin')
  public admin() {
    return 'Hello, admin!';
  }
}
