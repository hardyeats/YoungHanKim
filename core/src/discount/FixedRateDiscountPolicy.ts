import { Grade, Member } from "../member/Member";
import { DiscountPolicy } from "./DiscountPolicy";

export class FixedRateDiscountPolicy implements DiscountPolicy {
  private readonly discountPerent = 10;
  discount(member: Member, price: number): number {
    if (member.grade === Grade.VIP) {
      return (price * this.discountPerent) / 100;
    }
    return 0;
  }
}
