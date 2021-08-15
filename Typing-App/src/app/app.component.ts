import { Component } from '@angular/core';
import {lorem} from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Typing-App';
  randomText = lorem.sentences();
  userInput = '';

  generateNewString(){
    this.randomText = lorem.sentences();
    this.userInput = '';
  }
  updateInput(event:Event){
    const targetEvent = event.target as HTMLInputElement;
    this.userInput = targetEvent.value;
  }
  compare(letter:string, userinput: string){
    if(!userinput){
      return 'pending';
    }

    return letter === userinput ? 'correct' : 'incorrect';
  }
}
