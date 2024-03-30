import { MainEntity } from 'src/entities/main.entities';
import { Column, Entity } from 'typeorm';

@Entity()
export class Offer extends MainEntity {
  @Column()
  user: string;

  @Column()
  item: string;

  @Column()
  amount: string;

  @Column()
  hidden: boolean;
}
