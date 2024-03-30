import { MainEntity } from 'src/entities/main.entities';
import { Column, Entity } from 'typeorm';

@Entity()
export class Wishlistlist extends MainEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  image: string;

  // @Column()
  // items: string[];
}
