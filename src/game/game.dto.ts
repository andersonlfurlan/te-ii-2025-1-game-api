import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  IsDateString,
  IsNumber,
  Min,
  ArrayNotEmpty,
  ValidateNested,
  IsArray,
} from 'class-validator';
import { PlatformDto } from 'src/platform/platform.dto';

export class GameDto {
  @IsUUID('4', { message: 'O campo ID deve ser um UUID' })
  @IsOptional()
  id: string;

  @IsString({ message: 'O campo title deve ser do tipo string' })
  @IsNotEmpty({ message: 'O campo title é obrigatório' })
  title: string;

  @IsString({ message: 'O campo category deve ser do tipo string' })
  @IsNotEmpty({ message: 'O campo category é obrigatório' })
  category: string;

  @IsString({ message: 'O campo image deve ser do tipo string' })
  @IsOptional()
  image: string;

  @IsDateString({}, { message: 'O campo launchDate deve ser uma data válida' })
  launchDate: string;

  @IsNumber({}, { message: 'O campo price deve ser um número' })
  @Min(0, { message: 'O campo price deve ser maior ou igual a 0' })
  price: number;

  @ArrayNotEmpty({ message: 'O campo platforms não pode ser vazio' })
  @ValidateNested({ message: 'O objeto deve ser do tipo platform' })
  @IsArray({ message: 'O campo platform deve ser um array' })
  platforms: PlatformDto[];
}
