import { Injectable } from '@nestjs/common';
import { CreatewishlistDto } from './dto/create-wishlist.dto';
import { UpdatewishlistDto } from './dto/update-wishlist.dto';

@Injectable()
export class wishlistService {
  create(createwishlistDto: CreatewishlistDto) {
    return 'This action adds a new wishlist';
  }

  findAll() {
    return `This action returns all wishlist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wishlist`;
  }

  update(id: number, updatewishlistDto: UpdatewishlistDto) {
    return `This action updates a #${id} wishlist`;
  }

  remove(id: number) {
    return `This action removes a #${id} wishlist`;
  }
}
