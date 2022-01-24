import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: any = ''; // musste das zu any wechseln wieso geht nicht mit string
  game: Game = new Game;  // nur game = Game geht nicht wieso?
 
  constructor() { }

  ngOnInit(): void {
    this.newGame();
    console.log(this.game)
  }

  newGame(){
   this.game = new Game(); 
  }

  takeCard(){
    if(!this.pickCardAnimation){
      this.currentCard = this.game.stacks.pop();
      console.log(this.currentCard);
      this.pickCardAnimation = true;
     
      console.log('New Card: '+ this.currentCard)
      console.log('Game is ',this.game)
    
      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1000);
    }
 
  }

}