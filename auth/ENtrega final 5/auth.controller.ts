
import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { LocalAuthGuard } from './Guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly AuthService:AuthService){}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  login(@Request() req) {
    // Se chegou até aqui, o usuário está autenticado
    return this.AuthService.login(req.user)
  }
}