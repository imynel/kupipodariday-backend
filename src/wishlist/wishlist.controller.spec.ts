import { Test, TestingModule } from '@nestjs/testing';
import { wishlistController } from './wishlist.controller';
import { wishlistService } from './wishlist.service';

describe('wishlistController', () => {
  let controller: wishlistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [wishlistController],
      providers: [wishlistService],
    }).compile();

    controller = module.get<wishlistController>(wishlistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
