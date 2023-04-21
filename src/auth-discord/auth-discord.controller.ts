import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiTags,
} from '@nestjs/swagger';

import { AuthService } from '../auth/auth.service';
import { AuthDiscordService } from './auth-discord.service';
import { AuthDiscordLoginDto } from './dto/auth-discord-login.dto';
import {
  CreatedResponse,
  ForbiddenResponse,
} from './swagger/responses.swagger';

@ApiTags('Auth')
@Controller({
  path: '/auth/discord',
  version: '1',
})
export class AuthDiscordController {
  constructor(
    private authDiscordService: AuthDiscordService,
    private authService: AuthService,
  ) {}

  @Post('login')
  @ApiCreatedResponse({
    description: 'The user has been created successfully',
    schema: {
      example: CreatedResponse,
    },
  })
  @ApiForbiddenResponse({
    description: 'An invalid code was passed',
    schema: {
      example: ForbiddenResponse,
    },
  })
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: AuthDiscordLoginDto) {
    const socialData = await this.authDiscordService.getProfileByCode(
      loginDto.code,
    );

    return this.authService.validateSocialLogin('discord', {
      id: socialData.id,
      email: socialData.email,
      username: socialData.username,
      photo: this.authDiscordService.getAvatarUrl(
        socialData.id,
        socialData.avatar,
      ),
    });
  }
}
