import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PaymentPipes';
  name: string;
  date: string;
  amount: number;
  height: number;
  miles: number;

  car = {
    make: 'Toyota',
    model: 'Camry',
    year:2000
  }

  onMilesChange(event:Event){
    const targetElement = event.target as HTMLInputElement;
    this.miles = parseFloat(targetElement.value);
  }

  onNameChange(event:Event){
    const targetElement = event.target as HTMLInputElement;
    this.name = targetElement.value;
  }
  onDateChange(event:Event){
    const targetElement = event.target as HTMLInputElement;
    this.date = targetElement.value;
  }
  onAmountChange(event:Event){
    const targetElement = event.target as HTMLInputElement;
    this.amount = parseFloat(targetElement.value);
  }
  onHeightChange(event:Event){
    const targetElement = event.target as HTMLInputElement;
    this.height = parseFloat(targetElement.value);
  }






}
