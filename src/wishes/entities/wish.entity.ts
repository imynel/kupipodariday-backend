import { MainEntity } from 'src/entities/main.entities';
import { Column, Entity } from 'typeorm';

@Entity()
export class Wish extends MainEntity {
  @Column()
  name: string;

  @Column()
  link: string;

  @Column()
  image: string;

  @Column()
  price: number; // с округлением до сотых

  @Column()
  raised: number; // с округлением до сотых

  @Column()
  ownerм: string;

  @Column()
  description: string;

  // @Column()
  // offers: string[];

  @Column()
  copied: number; // целое десятичное число
}
