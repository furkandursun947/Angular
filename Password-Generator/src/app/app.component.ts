import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'PW GENERATOR';
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length=0;


  onButtonClick(){
    console.log(`
      About to generate a password with the following:
      include letters: ${this.includeLetters}
      include numbers: ${this.includeNumbers}
      include symbols: ${this.includeSymbols}
    `);
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwyz';
    const symbols = '!@#$½^&()*'

    let validChars = '';
    if(this.includeLetters){
      validChars += letters;
    }
    if(this.includeNumbers){
      validChars += numbers;
    }
    if(this.includeSymbols){
      validChars += symbols;
    }
    let generatedPassword = '';
    for(let i=0; i<this.length;i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

  getPassword(){
    return this.password;
  }
  getName(){
    return "ALEX";
  }

  onChangeLength(event: Event){
    const target = event.target as HTMLInputElement;
    const parsedValue = parseInt(target.value);
    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }

  onChangeLetters(){
    this.includeLetters = !this.includeLetters;
  }
  onChangeNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

}
