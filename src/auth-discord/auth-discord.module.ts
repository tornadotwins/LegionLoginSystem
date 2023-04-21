import { AuthDiscordController } from './auth-discord.controller';
import { Module } from '@nestjs/common';
import { AuthDiscordService } from './auth-discord.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  providers: [AuthDiscordService],
  controllers: [AuthDiscordController],
  exports: [],
})
export class AuthDiscordModule {}
