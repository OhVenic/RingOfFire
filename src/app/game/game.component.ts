import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GameInfoComponent } from '../game-info/game-info.component';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, GameInfoComponent, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit{
  pickCardAnimation = false;
  currentCard: string = "";
  game: Game = new Game();

  constructor(public dialog: MatDialog) {}

ngOnInit(): void {
  this.newGame();
  console.log(this.game);
  
}

takeCard() {
  if(!this.pickCardAnimation)
  this.currentCard = this.game.stack.pop() || "";
  this.pickCardAnimation = true;
  console.log("New Card:", this.currentCard);
  console.log("Game is", this.game);
  this.game.currentPlayer++;
  this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;

  setTimeout(() => {
      this.game.playedCards.push(this.currentCard);
    this.pickCardAnimation = false;
  }, 1000);
}

newGame() {
  this.game = new Game();
}

openDialog(): void {
  const dialogRef = this.dialog.open(DialogAddPlayerComponent, {
  });

  dialogRef.afterClosed().subscribe(name => {
    if(name && name.length > 0) {

    this.game.players.push(name);}
  })
}}
