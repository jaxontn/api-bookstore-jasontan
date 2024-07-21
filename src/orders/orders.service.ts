import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'nestjs-prisma';

import { CreateOrderWithItemsDto } from './dto/create-order-with-items.dto';
import { BooksService } from '../books/books.service';

@Injectable()
export class OrdersService {

  //ADDDED CONSTRUCTOR
  constructor(
    private readonly prisma: PrismaService,
    private readonly booksService: BooksService,
  ) {}
  
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



  async createOrderWithItems(userId: number, createOrderWithItemsDto: CreateOrderWithItemsDto) {
    const { status, orderItems } = createOrderWithItemsDto;

    // Create the order
    const order = await this.prisma.order.create({
      data: {
        userId,
        status,
      },
    });

    //Initialize variables for order items and total order price
    const orderItemsData = [];
    //let totalOrderPrice = 0;

    //process each order item
    for(const item of orderItems) {
      const book = await this.booksService.findOne(item.bookId);

      //Validate each bookId in the order items
      if(!book) {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: 'Book with ID ${item.bookId} does not exist',
          },
          HttpStatus.BAD_REQUEST,
        );
      }

      const bookPrice = book.price;
      const itemTotalPrice = item.quantity * bookPrice;

      orderItemsData.push({
        ...item,
        orderId: order.id,
        totalPrice: itemTotalPrice, //add the calculated totalPrice for current item
      });

      //totalOrderPrice += itemTotalPrice;

    }


    await this.prisma.orderItem.createMany({
      data: orderItemsData,
    });

    // Return the created order along with its items
    return {
      order,
      orderItems: orderItemsData,
    };
  }
}
