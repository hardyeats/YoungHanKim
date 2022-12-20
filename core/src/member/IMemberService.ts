import { Member } from "./Member";

export interface IMemberService {
  join(member: Member): void;
  findMember(memberId: number): Member;
}
