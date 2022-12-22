export class Order {
  constructor(
    public memberId: number,
    public itemName: string,
    public itemPrice: number,
    public discountedPrice: number
  ) {}
}
