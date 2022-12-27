import { describe, expect, it } from "@jest/globals";
import { AppConfig } from "../AppConfig";
import { IMemberService } from "./IMemberService";
import { Grade, Member } from "./Member";
import { MemberService } from "./MemberService";

describe("MemberService", () => {
  const memberService: IMemberService = new AppConfig().memberService();

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
