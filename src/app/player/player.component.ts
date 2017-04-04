import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from './../player.model';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  providers: [PlayerService]
})
export class PlayerComponent implements OnInit {
  players: FirebaseListObservable<any[]>;


  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
    console.log(this.players);
  }

}
