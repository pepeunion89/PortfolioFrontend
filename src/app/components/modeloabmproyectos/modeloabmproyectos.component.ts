import { Component, Inject, OnInit } from '@angular/core';
import { ServicemanagerService } from 'src/app/services/servicemanager.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Experiencia } from 'src/app/model/experiencia';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modeloabmproyectos',
  templateUrl: './modeloabmproyectos.component.html',
  styleUrls: ['./modeloabmproyectos.component.scss']
})
export class ModeloabmproyectosComponent implements OnInit {

  public dataProyectos: Experiencia;
  public tituloabm: String = "";
  private banderola: boolean;


  constructor(private servicio: ServicemanagerService, 
              @Inject(MAT_DIALOG_DATA) public data: any,
              public matDialogRef: MatDialogRef<ModeloabmproyectosComponent>,
              private proyectoService: ProyectosService) { }

  ngOnInit(): void {
    this.openModal(this.data.mode, this.data.proyecto);
  
  }

  // METODO OPEN MODO -----------------------------------------------
  public openModal(mode: String, proyecto?: Experiencia):void{
    
    if(mode==='add'){
      this.tituloabm ="Añadir proyecto";
      this.banderola = false;
    }else if(mode==='edit'){      
      this.tituloabm="Editar proyecto";
      this.banderola = true;
      if(proyecto){        
        this.dataProyectos=proyecto;
      }
    }
  }

  public onSubmitProyecto(addPro: NgForm){
    addPro.value.tituloExperiencia = "Freelance";
    if(!this.banderola){
      this.onAddProyecto(addPro);
    }else{
      this.onUpdateProyecto(addPro.value);
    }

  }

   // METODO AÑADIR -----------------------------------------------
   public onAddProyecto(addPro: NgForm){

    addPro.value.tituloExperiencia = "Freelance";

    document.getElementById('add-proyecto-form')?.click();
    this.proyectoService.addProyectos(addPro.value).subscribe({
      next: (response: Experiencia)=>{
        console.log(response);
               //this.getExperiencia();
        addPro.reset();
        
        this.matDialogRef.close(true);
      },
      error:(error: HttpErrorResponse)=>{
        alert(error.message);
        addPro.reset();
      }
    })

  }

  // METODO ACTUALIZAR -----------------------------------------------
  public onUpdateProyecto(proyecto: Experiencia){

    document.getElementById('add-proyecto-form')?.click();
    this.proyectoService.updateProyectos(proyecto).subscribe({
      next: (response: Experiencia)=>{
        console.log(response);
          //this.getExperiencia();
          this.matDialogRef.close(true);
      },
      error:(error: HttpErrorResponse)=>{
        alert(error.message);
      }
    })

  }



}
