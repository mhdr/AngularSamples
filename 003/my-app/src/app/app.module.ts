import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Server1Component } from './server1/server1.component';
import { Server2Component } from './server2/server2.component';
import { Server3Component } from './server3/server3.component';

@NgModule({
  declarations: [
    AppComponent,
    Server1Component,
    Server2Component,
    Server3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
