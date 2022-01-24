export class Game{
    public players: string[] = [];
    public stacks: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;

    constructor(){
        for(let i = 1;i < 14; i++){
         this.stacks.push('spade_'+i);
         this.stacks.push('hearts_'+i);
         this.stacks.push('clubs_'+i);
         this.stacks.push('diamonds_'+i);
        }

        shuffle(this.stacks);
    }

}



function shuffle(array:any) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }