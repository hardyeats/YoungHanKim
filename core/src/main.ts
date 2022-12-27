import { AppConfig } from "./AppConfig";
import { Grade, Member } from "./member/Member";

const appConfig = new AppConfig();
const memberService = appConfig.memberService();
const member = new Member(1, "memberA", Grade.VIP);
memberService.join(member);
const findedMember = memberService.findMember(1);
console.log("new member:", member);
console.log("finded member:", findedMember);
