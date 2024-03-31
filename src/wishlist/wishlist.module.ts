import { Module } from '@nestjs/common';
import { wishlistService } from './wishlist.service';
import { wishlistController } from './wishlist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wishlist } from './entities/wishlist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Wishlist])],
  controllers: [wishlistController],
  providers: [wishlistService],
})
export class wishlistModule {}
