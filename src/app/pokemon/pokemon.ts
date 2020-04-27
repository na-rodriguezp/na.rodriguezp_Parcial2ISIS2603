export class Pokemon {
  constructor(private idA, private abilitiesA: Array<string>, private weightA: number, private weaknessA: Array<string>, private numberA: number, private heightA: number, private nameA: string, private typeA: Array<string>){}
    get id(): number { return this.idA; }
    get abilities(): Array<string> { return this.abilitiesA; }
    get weight(): number { return this.weightA; }
    get weakness(): Array<string> { return this.weaknessA; }
    get number(): number { return this.numberA; }
    get height(): number { return this.heightA; }
    get name(): string { return this.nameA; }
    get type(): Array<string> { return this.typeA; }

}
