import { Member } from "../member/Member";

export interface DiscountPolicy {
  /**
   *
   * @param member
   * @param price
   * @returns 할인 대상 금액
   */
  discount(member: Member, price: number): number;
}
