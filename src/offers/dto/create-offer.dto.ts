import { IsBoolean, IsInt, IsString, IsUrl } from 'class-validator';

export class CreateOfferDto {
  @IsString()
  user: string;

  @IsUrl()
  item: string;

  @IsInt()
  amout: string;

  @IsBoolean()
  hidden: boolean;
}
