import { IMemberRepository } from "./IMemberRepository";
import { Member } from "./Member";

export class MemoryMemberRepository implements IMemberRepository {
  private static store: Record<number, Member> = {};

  save(member: Member): void {
    MemoryMemberRepository.store;
  }
  findById(id: number): Member {
    throw new Error("Method not implemented.");
  }
}
