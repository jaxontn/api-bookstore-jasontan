import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { OrdersService } from './orders.service';
//import { CreateOrderDto } from './dto/create-order.dto';
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


  @Get(':id')
  findOrderByUser(@Param('id') id: string) {
    return this.ordersService.findOrderByUser(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: { adminId: number; updateOrderDto: UpdateOrderDto }) {

    const { adminId, updateOrderDto } = body;

    await this.ensureAdmin(adminId); // Check if the user is an admin

    return this.ordersService.update(+id, updateOrderDto);
  }



  @Delete(':id')
  async remove(@Param('id') id: string, @Body('adminId') adminId: number) {

    await this.ensureAdmin(adminId);
    return this.ordersService.remove(+id);
  }



  @Post()
  async createOrderWithItems(@Body() body: { userId: number; createOrderWithItemsDto: CreateOrderWithItemsDto }) {
    const { userId, createOrderWithItemsDto } = body;

    await this.ensureUser(userId); // Check if the user is valid

    // Proceed with creating the order and order items
    return this.ordersService.createOrderWithItems(userId, createOrderWithItemsDto);
  }



  async ensureUser(userId: number) {
    const user = await this.userService.findOne(userId);
    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'User not found',
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }



  async ensureAdmin(userId: number) {
    const user = await this.userService.findOne(userId);
    if (!user || !user.isAdmin) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'User is not an admin, only admins are allowed',
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }

}
