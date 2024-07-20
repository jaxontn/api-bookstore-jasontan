import { Injectable } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class OrderItemsService {

  //ADDDED CONSTRUCTOR
  constructor(private readonly prisma: PrismaService) {}
  
  create(createOrderItemDto: CreateOrderItemDto) {
    //return 'This action adds a new orderItem';
    return this.prisma.orderItem.create({ data: createOrderItemDto });
  }

  findAll() {
    //return `This action returns all orderItems`;
    return this.prisma.orderItem.findMany();
  }

  findOne(id: number) {
    //return `This action returns a #${id} orderItem`;
    return this.prisma.orderItem.findFirst({ where: { id } });
  }

  update(id: number, updateOrderItemDto: UpdateOrderItemDto) {
    //return `This action updates a #${id} orderItem`;
    return this.prisma.orderItem.update({ where: { id }, data: updateOrderItemDto });
  }

  remove(id: number) {
    //return `This action removes a #${id} orderItem`;
    return this.prisma.orderItem.delete({ where: { id } });
  }
}
