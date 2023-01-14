import { Component, Inject, OnInit } from '@angular/core';
import { ServicemanagerService } from 'src/app/services/servicemanager.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modeloabmexperiencia',
  templateUrl: './modeloabmexperiencia.component.html',
  styleUrls: ['./modeloabmexperiencia.component.scss']
})
export class ModeloabmexperienciaComponent implements OnInit {

  public dataExperiencia: Experiencia;
  public tituloabm: String = "";
  private banderola: boolean;

  constructor(private servicio: ServicemanagerService, 
              @Inject(MAT_DIALOG_DATA) public data: any,
              public matDialogRef: MatDialogRef<ModeloabmexperienciaComponent>,
              private experienciaService: ExperienciaService) { }

  ngOnInit(): void {

      this.openModal(this.data.mode, this.data.experiencia);

  } 



// METODO OPEN MODO -----------------------------------------------
  public openModal(mode: String, experiencia?: Experiencia):void{
    
    if(mode==='add'){
      this.tituloabm ="Añadir experiencia";
      this.banderola = false;
    }else if(mode==='edit'){      
      this.tituloabm="Editar experiencia";
      this.banderola = true;
      if(experiencia){        
        this.dataExperiencia=experiencia;
      }
    }
  }


  public onSubmitExperiencia(addExpe: NgForm){

    if(!this.banderola){
      this.onAddExperiencia(addExpe);
    }else{
      this.onUpdateExperiencia(addExpe.value);
    }

  }


  // METODO AÑADIR -----------------------------------------------
  public onAddExperiencia(addExpe: NgForm){

    document.getElementById('add-experiencia-form')?.click();
    this.experienciaService.addExperiencia(addExpe.value).subscribe({
      next: (response: Experiencia)=>{
        console.log(response);
               //this.getExperiencia();
        addExpe.reset();
        
        this.matDialogRef.close(true);
      },
      error:(error: HttpErrorResponse)=>{
        alert(error.message);
        addExpe.reset();
      }
    })

  }

 

  // METODO ACTUALIZAR -----------------------------------------------
  public onUpdateExperiencia(experiencia: Experiencia){

    document.getElementById('add-experiencia-form')?.click();
    this.experienciaService.updateExperiencia(experiencia).subscribe({
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
