export class CreateOrderItemDto {

    orderId: number;
    bookId: number;
    quantity: number;
    totalPrice?: number; //made it optional to cater for create-order-items dto

}
