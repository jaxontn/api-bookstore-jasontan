import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

import { UserService } from '../user/user.service';
import { CreateOrderWithItemsDto } from './dto/create-order-with-items.dto';
import { BooksService } from '../books/books.service';

@Controller('orders')
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly userService: UserService,
    private readonly booksService: BooksService,
  ) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(+id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }



  @Post('create-with-items')
  async createOrderWithItems(@Body() body: { userId: number; createOrderWithItemsDto: CreateOrderWithItemsDto }) {
    const { userId, createOrderWithItemsDto } = body;

    // Check if the user is valid
    const user = await this.userService.findOne(userId);
    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'userID does not exist',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    // Proceed with creating the order and order items
    return this.ordersService.createOrderWithItems(userId, createOrderWithItemsDto);
  }
}
