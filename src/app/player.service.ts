import { Injectable } from '@angular/core';
import { Player } from './player.model';
// import { PLAYERS } from '../sample-players';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;
  constructor(private route: ActivatedRoute, private router: Router, private database: AngularFireDatabase) {
     this.players = database.list('players');
  }

  getPlayers(){
    return this.players;
  }

  addPlayer(newPlayer: Player){
    this.players.push(newPlayer)
    this.router.navigate([''])
  }

  getPlayerById(playerId){
  return this.database.object('players/' + playerId)
  }

  updatePlayer(localUpdatedPlayer){
    var playerEntryInFirebase = this.getPlayerById(localUpdatedPlayer.$key);
    playerEntryInFirebase.update({
      name: localUpdatedPlayer.name,
      role: localUpdatedPlayer.role,
      image: localUpdatedPlayer.image,
      highestTrophies: localUpdatedPlayer.highestTrophies
    });
  }

  deletePlayer(localPlayerToDelete){
  var playerEntryInFirebase = this.getPlayerById(localPlayerToDelete.$key);
  playerEntryInFirebase.remove();
  this.router.navigate([''])
  }
}
