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
  async findOrderByUser(@Param('id') id: string) {

    try {
      const order = await this.ordersService.findOrderByUser(+id);
      if (!order) {
        throw new HttpException('Order not found', HttpStatus.NOT_FOUND);
      }
      return order;
    } catch (error) {
      throw new HttpException('Failed to retrieve order', HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }


  



  // Endpoint to fetch orders with pagination
  @Get('/paginate/:id')
  async findOrderByUserPagination(
    @Param('id') id: string,
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '5'
  ) {

    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);

    if (isNaN(pageNumber) || pageNumber < 1) {
      throw new HttpException('Invalid page number', HttpStatus.BAD_REQUEST);
    }

    if (isNaN(limitNumber) || limitNumber < 1) {
      throw new HttpException('Invalid limit number', HttpStatus.BAD_REQUEST);
    }

    try {
      return await this.ordersService.findOrdersByUserWithPagination(+id, pageNumber, limitNumber);
    } catch (error) {
      throw new HttpException('Failed to retrieve orders with pagination', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }






  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: { adminId: number; updateOrderDto: UpdateOrderDto }) {

    const { adminId, updateOrderDto } = body;

    try {
      await this.ensureAdmin(adminId); // Check if the user is an admin
      const updatedOrder = await this.ordersService.update(+id, updateOrderDto);
      if (!updatedOrder) {
        throw new HttpException('Order not found', HttpStatus.NOT_FOUND);
      }
      return updatedOrder;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Failed to update order', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }






  @Delete(':id')
  async remove(@Param('id') id: string, @Body('adminId') adminId: number) {

    try {
      await this.ensureAdmin(adminId); // Check if the user is an admin
      const deletedOrder = await this.ordersService.remove(+id);
      if (!deletedOrder) {
        throw new HttpException('Order not found', HttpStatus.NOT_FOUND);
      }
      return deletedOrder;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Failed to delete order', HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }






  @Post()
  async createOrderWithItems(@Body() body: { userId: number; createOrderWithItemsDto: CreateOrderWithItemsDto }) {

    const { userId, createOrderWithItemsDto } = body;

    try {
      await this.ensureUser(userId); // Check if the user is valid
      // Proceed with creating the order and order items
      const newOrder = await this.ordersService.createOrderWithItems(userId, createOrderWithItemsDto);
      return newOrder;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Failed to create order with items', HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }



  


  private async ensureUser(userId: number) {

      const user = await this.userService.findOne(userId);
      if (!user) {
        throw new HttpException('User not found', HttpStatus.FORBIDDEN);
      }
  }






  private async ensureAdmin(userId: number) {

      const user = await this.userService.findOne(userId);
      if (!user || !user.isAdmin) {
        throw new HttpException('User is not an admin, only admins are allowed', HttpStatus.FORBIDDEN);
      }
  }
  


}
