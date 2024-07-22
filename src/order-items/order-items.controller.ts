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

    await this.ensureAdmin(adminId); // Check if this user is an admin

    return this.orderItemsService.update(+id, updateOrderItemDto);
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
