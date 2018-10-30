import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { HereMapsModule } from 'ng2-heremaps';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ForoComponent } from './components/foro/foro.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { ListaComponent } from './components/lista/lista.component';
import { FormComponent } from './components/form/form.component';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';

import { AuthService } from './services/auth.service';
import { ConnectionService } from './services/connection.service';
import { AuthGuard } from './guards/auth.guard';
import { MapComponent } from './components/map/map.component';
import { RealvideoComponent } from './components/realvideo/realvideo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForoComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    AgendaComponent,
    ListaComponent,
    FormComponent,
    MapComponent,
    RealvideoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HereMapsModule.forRoot({
      apiKey: 'DvtuiM4qevVLHBhosxKs8Q',
      appId: 'y3MJbr4gRAowxWGxE3cw',
      apiVersion: '3.0',
      libraries: ['core', 'service']
    }),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [AuthService, AuthGuard, FlashMessagesService, ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
