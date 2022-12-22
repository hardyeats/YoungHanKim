import { Order } from "./Order";

export interface IOrderService {
  createOrder(memberId: number, itemName: string, itemPrice: number): Order;
}
