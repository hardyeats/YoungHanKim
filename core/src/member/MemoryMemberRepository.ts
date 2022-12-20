import { IMemberRepository } from "./IMemberRepository";
import { Member } from "./Member";

export class MemoryMemberRepository implements IMemberRepository {
  private static store: Record<number, Member> = {};

  save(member: Member): void {
    MemoryMemberRepository.store[member.id] = member;
  }
  findById(id: number): Member {
    return MemoryMemberRepository.store[id];
  }
}
