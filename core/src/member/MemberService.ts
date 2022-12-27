import { IMemberRepository } from "./IMemberRepository";
import { IMemberService } from "./IMemberService";
import { Member } from "./Member";
import { MemoryMemberRepository } from "./MemoryMemberRepository";

export class MemberService implements IMemberService {
  constructor(private memberRepository: IMemberRepository) {}

  join(member: Member): void {
    this.memberRepository.save(member);
  }
  findMember(memberId: number): Member {
    return this.memberRepository.findById(memberId);
  }
}
