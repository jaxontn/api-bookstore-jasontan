import { Module } from '@nestjs/common';
import { OrderItemsService } from './order-items.service';
import { OrderItemsController } from './order-items.controller';
import { PrismaModule } from 'nestjs-prisma';
import { UserModule } from '../user/user.module';

@Module({
  imports: [PrismaModule, UserModule], //Import UserModule
  controllers: [OrderItemsController],
  providers: [OrderItemsService],
})
export class OrderItemsModule {}
