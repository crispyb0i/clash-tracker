import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PlayerService]
})
export class AdminComponent implements OnInit {
  @Input() selectedPlayer;
  players: FirebaseListObservable<any[]>;


  constructor(private playerService: PlayerService,private router: Router) { }
  showForm = false

  ngOnInit() {
    this.players = this.playerService.getPlayers()
  }

  submitForm(name: string, image: string, role: string, highestTrophies: number){
    var newPlayer: Player = new Player(name,role,highestTrophies);
    this.playerService.addPlayer(newPlayer)
  }

  beginUpdatingPlayer(playerToUpdate){
    this.playerService.updatePlayer(playerToUpdate);
    this.router.navigate(['']);
  }

  beginDeletingPlayer(playerToDelete){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.playerService.deletePlayer(playerToDelete);
    }
  }

  formHide(){
    this.showForm=!this.showForm
    console.log(this.showForm)
  }
}
