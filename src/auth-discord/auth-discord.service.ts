import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as DiscordOAuth2 from 'discord-oauth2';
import OAuth from 'discord-oauth2';

@Injectable()
export class AuthDiscordService {
  private readonly discordOAuth: DiscordOAuth2;

  constructor(private readonly configService: ConfigService) {
    this.discordOAuth = new DiscordOAuth2({
      clientId: configService.get('discord.clientId'),
      clientSecret: configService.get('discord.clientSecret'),
    });
  }

  async getProfileByCode(code: string): Promise<OAuth.User> {
    const { access_token: accessToken } = await this.discordOAuth
      .tokenRequest({
        code,
        scope: ['identify', 'email'],
        grantType: 'authorization_code',
        redirectUri: this.configService.get('discord.redirectUri'),
      })
      .catch(() => {
        throw new ForbiddenException('An invalid code was passed');
      });

    return this.discordOAuth.getUser(accessToken);
  }

  getAvatarUrl(userId, avatarId) {
    if (!userId || !avatarId) {
      return null;
    }
    return `https://cdn.discordapp.com/avatars/${userId}/${avatarId}.png`;
  }
}
