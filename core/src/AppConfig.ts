import { FixedAmountDiscountPolicy } from "./discount/FixedAmountDiscountPolicy";
import { IMemberService } from "./member/IMemberService";
import { MemberService } from "./member/MemberService";
import { MemoryMemberRepository } from "./member/MemoryMemberRepository";
import { IOrderService } from "./order/IOrderService";
import { OrderService } from "./order/OrderService";

export class AppConfig {
  memberService(): IMemberService {
    return new MemberService(new MemoryMemberRepository());
  }
  orderService(): IOrderService {
    return new OrderService(
      new MemoryMemberRepository(),
      new FixedAmountDiscountPolicy()
    );
  }
}
