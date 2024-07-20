import { Test, TestingModule } from '@nestjs/testing';
import { BookDetailsController } from './book-details.controller';
import { BookDetailsService } from './book-details.service';

describe('BookDetailsController', () => {
  let controller: BookDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookDetailsController],
      providers: [BookDetailsService],
    }).compile();

    controller = module.get<BookDetailsController>(BookDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
