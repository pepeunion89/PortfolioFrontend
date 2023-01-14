import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ExperienciaComponent } from '../components/experiencia/experiencia.component';
import { FormacionComponent } from '../components/formacion/formacion.component';
import { HabilidadesComponent } from '../components/habilidades/habilidades.component';
import { ModeloabmComponent } from '../components/modeloabm/modeloabm.component';
import { ModeloabmexperienciaComponent } from '../components/modeloabmexperiencia/modeloabmexperiencia.component';
import { ModeloabmhabilidadesComponent } from '../components/modeloabmhabilidades/modeloabmhabilidades.component';
import { ModeloabmproyectosComponent } from '../components/modeloabmproyectos/modeloabmproyectos.component';
import { ProyectosComponent } from '../components/proyectos/proyectos.component';
import { Experiencia } from '../model/experiencia';
import { Formacion } from '../model/formacion';
import { Habilidades } from '../model/habilidades';

@Injectable({
  providedIn: 'root'
})
export class ServicemanagerService {

  constructor(private dialog:MatDialog) { }
  public mostrarContenidoExperiencia():Observable<any>{
    
    let dialogRef: MatDialogRef<ExperienciaComponent>;
    dialogRef = this.dialog.open(ExperienciaComponent, {panelClass: 'custom-dialog-container'});    
    return dialogRef.afterClosed();
  }

  public mostrarContenidoFormacion():Observable<any>{
    
    let dialogRef: MatDialogRef<FormacionComponent>;
    dialogRef = this.dialog.open(FormacionComponent, {panelClass: 'custom-dialog-container'});    
    return dialogRef.afterClosed();
  }

  public mostrarContenidoHabilidades():Observable<any>{
    
    let dialogRef: MatDialogRef<HabilidadesComponent>;
    dialogRef = this.dialog.open(HabilidadesComponent, {panelClass: 'custom-dialog-container'});    
    return dialogRef.afterClosed();
  }

  public mostrarContenidoProyectos():Observable<any>{
    
    let dialogRef: MatDialogRef<ProyectosComponent>;
    dialogRef = this.dialog.open(ProyectosComponent, {panelClass: 'custom-dialog-container'});    
    return dialogRef.afterClosed();
  }

  // ACA EMPIEZAN LOS ABM -----------------------------------------------------------------------



  //Experiencia
  public mostrarContenidoModeloExperienciaabm(mode: String, experiencia?: Experiencia):Observable<any>{
    let dialogRef: MatDialogRef<ModeloabmexperienciaComponent>;
    let data: any ={mode};

    if(experiencia){
      data['experiencia']=experiencia;
    }

    dialogRef = this.dialog.open(ModeloabmexperienciaComponent, {data, panelClass: 'custom-dialog-container'});    
    return dialogRef.afterClosed();

  }

  //Formacion por error tiene el Modeloabm sin aclarar que es de Formacion
  public mostrarContenidoModeloFormacionabm(mode: String, formacion?: Formacion):Observable<any>{
    let dialogRef: MatDialogRef<ModeloabmComponent>;
    let data: any ={mode};

    if(formacion){
      data['formacion']=formacion;
    }

    dialogRef = this.dialog.open(ModeloabmComponent, {data, panelClass: 'custom-dialog-container'});    
    return dialogRef.afterClosed();

  }

  //Habilidades
  public mostrarContenidoModeloHabilidadesabm(mode: String, habilidades?: Habilidades):Observable<any>{
    let dialogRef: MatDialogRef<ModeloabmhabilidadesComponent>;
    let data: any ={mode};

    if(habilidades){
      data['habilidades']=habilidades;
    }

    dialogRef = this.dialog.open(ModeloabmhabilidadesComponent, {data, panelClass: 'custom-dialog-container'});    
    return dialogRef.afterClosed();

  }

  //Proyectos
  public mostrarContenidoModeloProyectosabm(mode: String, proyecto?: Experiencia):Observable<any>{
    let dialogRef: MatDialogRef<ModeloabmproyectosComponent>;
    let data: any ={mode};

    if(proyecto){
      data['proyecto']=proyecto;
    }

    dialogRef = this.dialog.open(ModeloabmproyectosComponent, {data, panelClass: 'custom-dialog-container'});    
    return dialogRef.afterClosed();

  }

}
