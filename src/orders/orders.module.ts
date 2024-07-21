import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { PrismaModule } from 'nestjs-prisma';
import { UserModule } from '../user/user.module';
import { BooksModule } from '../books/books.module';

@Module({
  imports: [PrismaModule, UserModule, BooksModule], //Import UserModule, BookModule
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
