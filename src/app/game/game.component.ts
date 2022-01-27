import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: any = '';   // | undefined 
  game = new Game;  
 
  constructor(public dialog: MatDialog) { }

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
    
      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length

      console.log('Currentplayer nr: ',this.game.currentPlayer)
      setTimeout(() => {
        this.game.playedCards.push(this.currentCard); // as string
        this.pickCardAnimation = false;
      }, 1000);
    }
 
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);
    

    dialogRef.afterClosed().subscribe((name: string) => {
      if(name && name.length > 0){
      this.game.players.push(name)
   
      }
    });
  }

}
