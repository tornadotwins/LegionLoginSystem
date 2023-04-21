import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AuthDiscordLoginDto {
  @ApiProperty({ example: 'abc' })
  @IsNotEmpty()
  code: string;
}
