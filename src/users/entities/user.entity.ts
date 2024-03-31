import { MainEntity } from 'src/entities/main.entities';
import { Offer } from 'src/offers/entities/offer.entity';
import { Wish } from 'src/wishes/entities/wish.entity';
import { Column, Entity, OneToMany } from 'typeorm';

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

  @OneToMany(() => Wish, (wish) => wish.owner)
  wishes: Wish[] 

  @OneToMany(() => Offer, (offer) => offer.user)
  offers: Offer[]

  @OneToMany(() => wishlist, (offer) => wishlist.owner)
  wi: Offer[]

  // ЕЩЁ 3 СТОЛБЦА СО СВЯЗЬЮ => wishes, offers, wishlists
}
