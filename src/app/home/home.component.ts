import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  countDownDate = new Date("June 19, 2030 23:33:00").getTime();
  now: any;
  distances: any;
  days: any;
  hours: any;
  minutes: any;
  seconds: any;
  showMessage: any;

  scores: any = [0, 0];
  player1score = 0;
  player2score = 0
  activeplayer = 0;
  playing = true;

  player1 = 0;
  player2 = 0;
  displaydice = false;
  img: any;
  players = true;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => this.settime(), 100);
  }

  rooldice() {
    this.displaydice = true;
    const dice = Math.trunc(Math.random() * 6) + 1;
    this.img = `assets/dice-${dice}.png`;

    if (dice !== 1 && this.players) {
      this.player1score += dice;

    } else if ((dice !== 1 && this.players == false)) {
      this.player2score += dice;

    } else {
      this.players = this.players == true ? false : true;
      this.player1score = 0;
      this.player2score = 0;
    }
  }

  hold() {
    if (this.players) {
      this.scores[0] += this.player1score;
      this.player2score = 0;
      this.player1score = 0;
      this.players = false;
      // this.rooldice();
    } else {
      this.scores[1] += this.player2score;
      this.player1score = 0;
      this.player2score = 0;
      this.players = true;
      // this.rooldice();
    }
  }

  reset() {
    this.player1score = 0;
    this.player2score = 0;
    this.players = true;
    this.scores = [0, 0];
    this.displaydice = false;
  }

  settime() {
    this.now = new Date().getTime();
    this.distances = this.countDownDate - this.now;
    this.days = Math.floor(this.distances / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((this.distances % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((this.distances % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((this.distances % (1000 * 60)) / 1000);
    this.showMessage = false;
    if (this.distances < 1) {
      this.showMessage = true;
    }
  }
  // C:\Users\HARISH\AppData\Local\Programs\Microsoft VS Code\bin  
}
