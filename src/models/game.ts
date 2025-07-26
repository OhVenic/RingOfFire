export class Game {
    public players: string[] = ["Noah", "David", "Dani"];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer = 0;

    constructor() {
        for(let i=0; i < 13; i++) {
            this.stack.push('ace_'+ i);
            this.stack.push('hearts_'+ i);
            this.stack.push('clubs_'+ i);
            this.stack.push('diamonds_'+ i);
        }
        shuffle(this.stack);
    }
}

function shuffle(array: any[]): any[] {
var currentIndex = array.length, temporaryValue, randomIndex;
while (0 !== currentIndex) {
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex -= 1;
  temporaryValue = array[currentIndex];
  array[currentIndex] = array[randomIndex];
  array[randomIndex] = temporaryValue;
}
return array;
}