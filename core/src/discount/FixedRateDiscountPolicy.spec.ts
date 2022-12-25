import { describe, it, expect } from "@jest/globals";
import { Grade, Member } from "../member/Member";
import { FixedRateDiscountPolicy } from "./FixedRateDiscountPolicy";

describe("FixedRateDiscountPolicy", () => {
  const policy = new FixedRateDiscountPolicy();

  it("should grant 10% discount to VIP members", () => {
    const member = new Member(1, "memberVIP", Grade.VIP);
    const discount = policy.discount(member, 10000);
    expect(discount).toBe(1000);
  });

  it("should not grant 10% discount to non-VIP members", () => {
    const member = new Member(1, "memberVIP", Grade.BASIC);
    const discount = policy.discount(member, 10000);
    expect(discount).toBe(0);
  });
});
