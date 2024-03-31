import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { wishlistService } from './wishlist.service';
import { CreatewishlistDto } from './dto/create-wishlist.dto';
import { UpdatewishlistDto } from './dto/update-wishlist.dto';

@Controller('wishlist')
export class wishlistController {
  constructor(private readonly wishlistService: wishlistService) {}

  @Post()
  create(@Body() createwishlistDto: CreatewishlistDto) {
    return this.wishlistService.create(createwishlistDto);
  }

  @Get()
  findAll() {
    return this.wishlistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wishlistService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatewishlistDto: UpdatewishlistDto,
  ) {
    return this.wishlistService.update(+id, updatewishlistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wishlistService.remove(+id);
  }
}
