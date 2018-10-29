import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { ForoComponent } from './components/foro/foro.component';
import { LoginComponent } from './components/login/login.component';
import { AgendaComponent } from './components/agenda/agenda.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'foro', component: ForoComponent },
  { path: 'agenda', component: AgendaComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }