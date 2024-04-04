import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';

import { CreatewishlistDto } from './dto/create-wishlist.dto';
import { UpdatewishlistDto } from './dto/update-wishlist.dto';
import { JwtGuard } from 'src/auth/jwt/jwt.guard';
import { WishlistService } from './wishlist.service';

@UseGuards(JwtGuard)
@Controller('wishlistlists')
export class wishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Get()
  getAllWishlists() {
    return this.wishlistService.getAllWishlists();
  }

  @Post()
  create(@Body() createwishlistDto: CreatewishlistDto, @Req() req) {
    return this.wishlistService.create(createwishlistDto, req.user);
  }

  @Get(':id')
  getWishlishById(@Param('id') id: number) {
    return this.wishlistService.getWishlishById(id);
  }

  @Patch(':id')
  updateWishlish(
    @Param('id') id: number,
    @Body() updatewishlistDto: UpdatewishlistDto,
  ) {
    return this.wishlistService.updateWishlish(id, updatewishlistDto);
  }

  @Delete(':id')
  deleteWishlist(@Param('id') id: number) {
    return this.wishlistService.deleteWishlist(id);
  }
}
