import { DiscountPolicy } from "../discount/DiscountPolicy";
import { FixedDiscountPolicy } from "../discount/FixedDiscountPolicy";
import { IMemberRepository } from "../member/IMemberRepository";
import { MemoryMemberRepository } from "../member/MemoryMemberRepository";
import { IOrderService } from "./IOrderService";
import { Order } from "./Order";

export class OrderService implements IOrderService {
  private readonly memberRepository: IMemberRepository =
    new MemoryMemberRepository();
  private readonly discountPolicy: DiscountPolicy = new FixedDiscountPolicy();

  createOrder(memberId: number, itemName: string, itemPrice: number): Order {
    const member = this.memberRepository.findById(memberId);
    const discountedPrice = this.discountPolicy.discount(member, itemPrice);
    return new Order(memberId, itemName, itemPrice, discountedPrice);
  }
}
