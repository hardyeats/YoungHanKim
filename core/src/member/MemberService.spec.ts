import { describe, expect, it } from "@jest/globals";
import { IMemberService } from "./IMemberService";
import { Grade, Member } from "./Member";
import { MemberService } from "./MemberService";

describe("MemberService", () => {
  const memberService: IMemberService = new MemberService();

  it("should return same member with same member id", () => {
    //given
    const member = new Member(1, "memberA", Grade.VIP);
    //when
    memberService.join(member);
    const findedMember = memberService.findMember(1);
    //then
    expect(findedMember).toEqual(member);
  });
});
