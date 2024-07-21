import { CreateOrderItemDto } from "src/order-items/dto/create-order-item.dto";

export class CreateOrderWithItemsDto {

    status: string;
    orderItems: CreateOrderItemDto[]; //An order can have many items
}