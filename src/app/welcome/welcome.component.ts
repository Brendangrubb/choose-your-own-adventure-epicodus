import { Component, OnInit } from '@angular/core';
import { Player } from './../player.model';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {


  createUser(userName, character, picture) {
    console.log(userName);
    console.log(character);
    console.log(picture);
  }

  constructor() { }

  ngOnInit() {
  }

}
