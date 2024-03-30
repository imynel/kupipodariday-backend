import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OffersModule } from './offers/offers.module';
import { UsersModule } from './users/users.module';
import { WishlistlistsModule } from './wishlistlists/wishlistlists.module';
import { WishesModule } from './wishes/wishes.module';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { Offer } from './offers/entities/offer.entity';
import { Wish } from './wishes/entities/wish.entity';
import { Wishlistlist } from './wishlistlists/entities/wishlistlist.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'student',
      password: 'student',
      database: 'kupipodariday',
      entities: [User, Offer, Wish, Wishlistlist],
      synchronize: true,
    }),
    UsersModule,
    OffersModule,
    WishesModule,
    WishlistlistsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
