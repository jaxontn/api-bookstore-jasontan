import { Test, TestingModule } from '@nestjs/testing';
import { BookDetailsService } from './book-details.service';

describe('BookDetailsService', () => {
  let service: BookDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookDetailsService],
    }).compile();

    service = module.get<BookDetailsService>(BookDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
