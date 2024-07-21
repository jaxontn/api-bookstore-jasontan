import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { PrismaModule } from 'nestjs-prisma';
import { UserModule } from '../user/user.module';

@Module({
  imports: [PrismaModule, UserModule], // Import PrismaModule and UserModule
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
