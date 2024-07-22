import { Controller, Body, Patch, Param, HttpException, HttpStatus } from '@nestjs/common';
import { OrderItemsService } from './order-items.service';
//import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';

import { UserService } from '../user/user.service';

@Controller('order-items')
export class OrderItemsController {
  constructor(
    private readonly orderItemsService: OrderItemsService,
    private readonly userService: UserService,
  ) {}






  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: { adminId: number; updateOrderItemDto: UpdateOrderItemDto }) {

    const { adminId, updateOrderItemDto } = body;

    try {
      await this.ensureAdmin(adminId); // Check if this user is an admin

      const updatedOrderItem = await this.orderItemsService.update(+id, updateOrderItemDto);
      if (!updatedOrderItem) {
        throw new HttpException('Order item not found', HttpStatus.NOT_FOUND);
      }
      return updatedOrderItem;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Failed to update order item', HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }






  private async ensureAdmin(userId: number) {

      const user = await this.userService.findOne(userId);
      if (!user || !user.isAdmin) {
        throw new HttpException('User is not an admin, only admins are allowed', HttpStatus.FORBIDDEN);
      }
  }



}
