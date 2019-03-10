import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Logging2Service} from './logging2.service';
import {DataService} from './data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Logging2Service, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
