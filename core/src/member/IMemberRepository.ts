import { Member } from "./Member";

export interface IMemberRepository {
  save(member: Member): void;
  findById(id: number): Member;
}
