import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { BookDetailsModule } from './book-details/book-details.module';
import { OrdersModule } from './orders/orders.module';
import { OrderItemsModule } from './order-items/order-items.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [BooksModule, BookDetailsModule, OrdersModule, OrderItemsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
