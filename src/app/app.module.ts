import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CdTimerModule } from 'angular-cd-timer';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component' 
import { FormsModule } from '@angular/forms';
import { ModeloabmComponent } from './components/modeloabm/modeloabm.component';
import { ModeloabmexperienciaComponent } from './components/modeloabmexperiencia/modeloabmexperiencia.component';
import { ModeloabmhabilidadesComponent } from './components/modeloabmhabilidades/modeloabmhabilidades.component';
import { ModeloabmproyectosComponent } from './components/modeloabmproyectos/modeloabmproyectos.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SigninComponent } from './components/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContenidoComponent,
    ExperienciaComponent,
    FormacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    IniciarSesionComponent,
    HomeComponent,
    LoginComponent,
    ModeloabmComponent,
    ModeloabmexperienciaComponent,
    ModeloabmhabilidadesComponent,
    ModeloabmproyectosComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    CdTimerModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
