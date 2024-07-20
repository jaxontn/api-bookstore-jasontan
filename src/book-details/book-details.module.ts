import { Module } from '@nestjs/common';
import { BookDetailsService } from './book-details.service';
import { BookDetailsController } from './book-details.controller';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [PrismaModule],
  controllers: [BookDetailsController],
  providers: [BookDetailsService],
})
export class BookDetailsModule {}
