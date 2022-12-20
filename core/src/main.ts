import { IMemberService } from "./member/IMemberService";
import { Grade, Member } from "./member/Member";
import { MemberService } from "./member/MemberService";

const memberService: IMemberService = new MemberService();
const member = new Member(1, "memberA", Grade.VIP);
memberService.join(member);
const findedMember = memberService.findMember(1);
console.log("new member:", member);
console.log("finded member:", findedMember);
