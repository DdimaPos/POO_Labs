export class Car {
  
  constructor(
    public readonly id: number,
    public readonly type: string,
    public readonly passengers: string,
    public readonly isDining: boolean,
    public readonly consumption: number,
  ) {}
}
