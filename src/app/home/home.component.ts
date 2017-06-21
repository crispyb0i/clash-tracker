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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  players: FirebaseListObservable<any[]>;
  filterByRole: string = "All Roles";
  constructor(
   private route: ActivatedRoute,
   private location: Location,
   private playerService: PlayerService,
   private router: Router
 ) { }

  ngOnInit() {
     this.players = this.playerService.getPlayers();
  }

  goToDetailPage(clickedPlayers) {
    this.router.navigate(['players', clickedPlayers.$key]);
  };

  onChange(optionFromMenu) {
  this.filterByRole = optionFromMenu;
  }

}
