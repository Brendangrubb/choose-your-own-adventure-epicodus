import { Component, OnInit } from '@angular/core';
import { Player } from './../player.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [PlayerService]
})
export class WelcomeComponent implements OnInit {
  nerdAvatar = false;
  slackerAvatar = false;
  overachieverAvatar = false;
  workhorseAvatar = false;
  coolAvatar = false;
  playerNoCreated = true
  playerCreated = false;

  onChange(value) {
    if (value === 'nerd') {
      this.nerdAvatar = true;
      this.slackerAvatar = false;
      this.overachieverAvatar = false;
      this.workhorseAvatar = false;
      this.coolAvatar = false;
    } else if (value === 'cool') {
      this.coolAvatar = true;
      this.slackerAvatar = false;
      this.overachieverAvatar = false;
      this.workhorseAvatar = false;
      this.nerdAvatar = false;
    } else if (value === 'workhorse') {
      this.workhorseAvatar = true;
      this.slackerAvatar = false;
      this.overachieverAvatar = false;
      this.coolAvatar = false;
      this.nerdAvatar = false;
    } else if (value === 'overachiever') {
      this.overachieverAvatar = true;
      this.slackerAvatar = false;
      this.workhorseAvatar = false;
      this.coolAvatar = false;
      this.nerdAvatar = false;
    } else if (value === 'slacker') {
      this.slackerAvatar = true;
      this.overachieverAvatar = false;
      this.workhorseAvatar = false;
      this.coolAvatar = false;
      this.nerdAvatar = false;
    } else {
      this.slackerAvatar = false;
      this.overachieverAvatar = false;
      this.workhorseAvatar = false;
      this.coolAvatar = false;
      this.nerdAvatar = false;
    }
  }

  createUser(userName, character) {
    var newPlayer: Player = new Player(userName, character);
    this.playerNoCreated = false;
    this.playerCreated = true;
    this.playerService.addPlayer(newPlayer);
    this.router.navigate(['userName', userName]);
  };



  constructor( private playerService: PlayerService, private router: Router) { }

  ngOnInit() {
  }

}
