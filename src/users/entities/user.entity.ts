import { MainEntity } from 'src/entities/main.entities';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends MainEntity {
  @Column()
  username: string;

  @Column({ default: 'Пока ничего не рассказал о себе' })
  about: string;

  @Column({ default: 'https://i.pravatar.cc/300' })
  avatar: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  // ЕЩЁ 3 СТОЛБЦА СО СВЯЗЬЮ => wishes, offers, wishlists
}
