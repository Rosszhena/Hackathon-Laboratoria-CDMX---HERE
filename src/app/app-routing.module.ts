import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { ForoComponent } from './components/foro/foro.component';
import { LoginComponent } from './components/login/login.component';
import { ListaComponent } from './components/lista/lista.component';
import { AuthGuard } from './guards/auth.guard';
import { ListComponent } from './components/homepage/list/list.component';
import { ListAddComponent } from './components/homepage/list-add/list-add.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent, canActivate: [AuthGuard] },
  { path: 'foro', component: ForoComponent, canActivate: [AuthGuard] },
  { path: 'lista', component: ListaComponent, canActivate: [AuthGuard] },
  {path: 'list', component: ListComponent },
  {path: 'list-add', component: ListAddComponent }
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