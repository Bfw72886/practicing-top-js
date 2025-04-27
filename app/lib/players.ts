class Player {
  name: string;
  marker: string;

  constructor(name: string, marker: string) {
    this.name = name;
    this.marker = marker;
  }

  sayName(): string {
    return `Hello, my name is ${this.name}.`;
  }
}

export const playerOne = new Player("steve", "X");
export const playerTwo = new Player("also steve", "O");
