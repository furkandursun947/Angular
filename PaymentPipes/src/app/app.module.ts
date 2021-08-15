import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConvertMilesToKMPipe } from './convert-miles-to-km.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConvertMilesToKMPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
