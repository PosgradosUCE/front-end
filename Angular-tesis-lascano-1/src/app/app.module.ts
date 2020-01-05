import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {DirectivaComponent} from './directiva/directiva.component';
import {Apibackend} from '../service/backend/apibackend';
import {RouterModule, Routes} from '@angular/router';
import {TablerocualitativoComponent} from './pages/posgrado/tablerocualitativo/tablerocualitativo.component';
import {TablerocuantitativoComponent} from './pages/posgrado/tablerocuantitativo/tablerocuantitativo.component';
import {InicioComponent} from './pages/posgrado/inicio/inicio.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './usuarios/login.component';
import {AuthGuard} from './usuarios/guards/auth.guard';
import {RoleGuard} from './usuarios/guards/role.guard';

const routes: Routes = [
  {path: '', redirectTo: 'posgrado/inicio', pathMatch: 'full'},
  {path: 'posgrado/inicio', component: InicioComponent},
  {path: 'posgrado/tablerocualitativo',
    component: TablerocualitativoComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {role: 'ROLE_ADMIN'}},
  {path: 'posgrado/tablerocuantitativo',
    component: TablerocuantitativoComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {role: 'ROLE_ADMIN'}},
  {path: 'login', component: LoginComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    TablerocualitativoComponent,
    TablerocuantitativoComponent,
    InicioComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [Apibackend],
  bootstrap: [AppComponent],
})
export class AppModule { }
