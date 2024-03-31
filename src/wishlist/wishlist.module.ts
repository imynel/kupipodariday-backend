import { Module } from '@nestjs/common';
import { wishlistService } from './wishlist.service';
import { wishlistController } from './wishlist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { wishlist } from './entities/wishlist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([wishlist])],
  controllers: [wishlistController],
  providers: [wishlistService],
})
export class wishlistModule {}
