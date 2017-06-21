import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player.model';

@Pipe({
  name: "role",
  pure: false
})
export class RolePipePipe implements PipeTransform {

  transform(input: Player[],desiredRole){
     var output: Player[] = [];

     if(desiredRole === "Leader") {
       for (var i = 0; i < input.length; i++){
         if(input[i].role==="Leader"){
           output.push(input[i])
         }
       }
       return output;
     }
     else if(desiredRole === "Co-Leader"){
       for (var i=0; i<input.length; i++){
         if(input[i].role==="Co-Leader"){
           output.push(input[i])
         }
       }return output;
     }else if(desiredRole === "Elder"){
       for (var i=0; i<input.length; i++) {
         if(input[i].role==="Elder"){
         output.push(input[i])
         }
       }return output;
     }else if(desiredRole === "Member"){
       for (var i=0; i<input.length; i++) {
         if(input[i].role==="Member"){
         output.push(input[i])
       }
       }return output;
     }else{
       return input
     }
  }
}
