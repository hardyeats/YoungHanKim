import { Grade, Member } from "../member/Member";
import { DiscountPolicy } from "./DiscountPolicy";

export class FixedDiscountPolicy implements DiscountPolicy {
  private readonly fixedDiscount = 1000;
  discount(member: Member, price: number): number {
    if (member.grade === Grade.VIP) {
      return this.fixedDiscount;
    } else {
      return 0;
    }
  }
}
