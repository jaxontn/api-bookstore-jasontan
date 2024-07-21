import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { PrismaModule } from 'nestjs-prisma';
import { UserModule } from '../user/user.module';

@Module({
  imports: [PrismaModule, UserModule], // Import UserModule
  controllers: [BooksController],
  providers: [BooksService],
  exports: [BooksService], // Export BookService so it can be used in other modules
})
export class BooksModule {}
