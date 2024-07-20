import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class OrdersService {

  //ADDDED CONSTRUCTOR
  constructor(private readonly prisma: PrismaService) {}
  
  async create(createOrderDto: CreateOrderDto) {
    //return 'This action adds a new order';
    try {
      return await this.prisma.order.create({ data: createOrderDto });
    } catch (error) {
      // Log the error or perform any necessary actions here
      console.error('Error creating order:', error);

      // Throw an HTTP exception with a meaningful error message
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'An error occurred while processing the request.',
          meta: error.meta,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  findAll() {
    //return `This action returns all orders`;
    return this.prisma.order.findMany();
  }

  findOne(id: number) {
    //return `This action returns a #${id} order`;
    return this.prisma.order.findFirst({ where: { id } });
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    //return `This action updates a #${id} order`;
    return this.prisma.order.update({ where: { id }, data: updateOrderDto });
  }

  remove(id: number) {
    //return `This action removes a #${id} order`;
    return this.prisma.order.delete({ where: { id } });
  }
}
