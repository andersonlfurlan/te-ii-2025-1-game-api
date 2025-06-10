import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  IsDateString,
  IsNumber,
  Min,
  ArrayNotEmpty,
  ArrayUnique,
} from 'class-validator';

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
  @ArrayUnique({ message: 'O campo platforms não pode ter duplicatas' })
  @IsUUID('4', { each: true, message: 'Cada plataforma deve ser um UUID' })
  platforms: string[];
}
