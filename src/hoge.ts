export class Hoge {
  constructor(private name: string = 'hoge') {}

  getMessage(): string {
    return `Hello ${this.name}`
  }
}
