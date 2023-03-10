import { describe, it, expect } from "@jest/globals";
import { AppConfig } from "../AppConfig";
import { Grade, Member } from "../member/Member";
import { MemberService } from "../member/MemberService";
import { OrderService } from "./OrderService";
describe("OrderService", () => {
  it("should always discount 1000 won", () => {
    const appConfig = new AppConfig();
    const memberService = appConfig.memberService();
    const orderService = appConfig.orderService();
    const member = new Member(1, "memberA", Grade.VIP);
    memberService.join(member);
    const order = orderService.createOrder(member.id, "itemA", 20000);
    expect(order.discountedPrice).toBe(2000);
  });
});
