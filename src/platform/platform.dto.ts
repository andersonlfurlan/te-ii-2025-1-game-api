import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';

export class PlatformDto {
  @IsUUID('4', { message: 'O campo ID deve ser um UUID' })
  @IsOptional()
  id: string;

  @IsString({ message: 'O campo name deve ser do tipo string' })
  @IsNotEmpty({ message: 'O campo name é obrigatório' })
  name: string;

  @IsString({ message: 'O campo manufacture deve ser do tipo string' })
  @IsOptional()
  manufacture: string;

  @IsString({ message: 'O campo version deve ser no formato string' })
  @IsOptional()
  @MaxLength(20, {
    message: 'O campo version deve ter no máximo 20 caracteres',
  })
  version: string;
}
