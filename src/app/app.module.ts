import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HereMapsModule } from 'ng2-heremaps';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ForoComponent } from './components/foro/foro.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AgendaComponent } from './components/agenda/agenda.component';

import {FlashMessagesModule} from 'angular2-flash-messages';
import {FlashMessagesService} from 'angular2-flash-messages';

import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth';

import { AuthService } from './services/auth.service';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForoComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    AgendaComponent
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
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule
  ],
  providers: [AuthService, FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
