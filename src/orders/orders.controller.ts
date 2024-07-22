import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, Query } from '@nestjs/common';
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

  
  // Endpoint to fetch orders with pagination
  @Get('/paginate/:id')
  async findOrderByUserPagination(
    @Param('id') id: string,
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '5'
  ) {
    const userId = +id;
    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);

    if (isNaN(pageNumber) || pageNumber < 1) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid page number',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    if (isNaN(limitNumber) || limitNumber < 1) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid limit number',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.ordersService.findOrdersByUserWithPagination(userId, pageNumber, limitNumber);
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
