import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  playerId;
  playerToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private playerService: PlayerService) { }

    ngOnInit() {
      this.route.params.forEach((urlParameters) => {
       this.playerId = urlParameters['id'];
     });
     this.playerToDisplay = this.playerService.getPlayerById(this.playerId);
    }
}
