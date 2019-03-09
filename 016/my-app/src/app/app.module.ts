import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight.directive';
import { HostListenerDirective } from './host-listener.directive';
import { HostBindingDirective } from './host-binding.directive';
import { Binding2Directive } from './binding2.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    HostListenerDirective,
    HostBindingDirective,
    Binding2Directive
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
