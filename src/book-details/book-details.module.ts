import { Module } from '@nestjs/common';
import { BookDetailsService } from './book-details.service';
import { BookDetailsController } from './book-details.controller';

@Module({
  controllers: [BookDetailsController],
  providers: [BookDetailsService],
})
export class BookDetailsModule {}
