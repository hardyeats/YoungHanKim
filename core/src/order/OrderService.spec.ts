import { describe, it, expect } from "@jest/globals";
import { Grade, Member } from "../member/Member";
import { MemberService } from "../member/MemberService";
import { OrderService } from "./OrderService";
describe("OrderService", () => {
  it("should always discount 1000 won", () => {
    const memberService = new MemberService();
    const orderService = new OrderService();
    const member = new Member(1, "memberA", Grade.VIP);
    memberService.join(member);
    const order = orderService.createOrder(member.id, "itemA", 10000);
    expect(order.discountedPrice).toBe(1000);
  });
});
