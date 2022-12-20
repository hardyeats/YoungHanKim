export class Member {
  constructor(public id: number, public name: string, public grade: Grade) {}
}

export enum Grade {
  BASIC,
  VIP,
}
