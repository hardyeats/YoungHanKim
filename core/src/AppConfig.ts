import { DiscountPolicy } from "./discount/DiscountPolicy";
import { FixedAmountDiscountPolicy } from "./discount/FixedAmountDiscountPolicy";
import { IMemberRepository } from "./member/IMemberRepository";
import { IMemberService } from "./member/IMemberService";
import { MemberService } from "./member/MemberService";
import { MemoryMemberRepository } from "./member/MemoryMemberRepository";
import { IOrderService } from "./order/IOrderService";
import { OrderService } from "./order/OrderService";

export class AppConfig {
  memberService(): IMemberService {
    return new MemberService(this.memberRepository());
  }
  orderService(): IOrderService {
    return new OrderService(this.memberRepository(), this.discountPolicy());
  }
  memberRepository(): IMemberRepository {
    return new MemoryMemberRepository();
  }
  discountPolicy(): DiscountPolicy {
    return new FixedAmountDiscountPolicy();
  }
}
