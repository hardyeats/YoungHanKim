import { DiscountPolicy } from "../discount/DiscountPolicy";
import { FixedAmountDiscountPolicy } from "../discount/FixedAmountDiscountPolicy";
import { FixedRateDiscountPolicy } from "../discount/FixedRateDiscountPolicy";
import { IMemberRepository } from "../member/IMemberRepository";
import { MemoryMemberRepository } from "../member/MemoryMemberRepository";
import { IOrderService } from "./IOrderService";
import { Order } from "./Order";

export class OrderService implements IOrderService {
  // private readonly discountPolicy: DiscountPolicy =
  //   new FixedAmountDiscountPolicy();
  constructor(
    private readonly memberRepository: IMemberRepository,
    private readonly discountPolicy: DiscountPolicy
  ) {}

  createOrder(memberId: number, itemName: string, itemPrice: number): Order {
    const member = this.memberRepository.findById(memberId);
    const discountedPrice = this.discountPolicy.discount(member, itemPrice);
    return new Order(memberId, itemName, itemPrice, discountedPrice);
  }
}
