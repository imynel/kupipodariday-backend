import { IsString } from 'class-validator';

export class CreateWishDto {
  @IsString()
  name: string;

  @IsString()
  link: string;

  @IsString()
  image: string;

  price: number;

  raised: number;

  @IsString()
  owner: string;

  @IsString()
  description: string;

  // ДОБАВИТЬ OFFER

  copied: number;
}
