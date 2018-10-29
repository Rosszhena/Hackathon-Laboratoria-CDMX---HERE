import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HereMapsModule } from 'ng2-heremaps';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HereMapsModule.forRoot({
      apiKey: 'DvtuiM4qevVLHBhosxKs8Q',
      appId: 'y3MJbr4gRAowxWGxE3cw',
      apiVersion: '3.0',
      libraries: ['core', 'service']
    }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
