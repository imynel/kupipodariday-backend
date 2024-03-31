import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OffersModule } from './offers/offers.module';
import { UsersModule } from './users/users.module';
import { wishlistModule } from './wishlist/wishlist.module';
import { WishesModule } from './wishes/wishes.module';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { Offer } from './offers/entities/offer.entity';
import { Wish } from './wishes/entities/wish.entity';
import { wishlist } from './wishlist/entities/wishlist.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'student',
      password: 'student',
      database: 'kupipodariday',
      entities: [User, Offer, Wish, wishlist],
      synchronize: true,
    }),
    UsersModule,
    OffersModule,
    WishesModule,
    wishlistModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
