import { Component, Inject, OnInit } from '@angular/core';
import { ServicemanagerService } from 'src/app/services/servicemanager.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Formacion } from 'src/app/model/formacion';
import { FormacionService } from 'src/app/services/formacion.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-modeloabm',
  templateUrl: './modeloabm.component.html',
  styleUrls: ['./modeloabm.component.scss']
})
export class ModeloabmComponent implements OnInit {

  public dataFormacion: Formacion;
  public tituloabm: String = "";
  private banderola: boolean;

  constructor(private servicio: ServicemanagerService, 
              @Inject(MAT_DIALOG_DATA) public data: any,
              public matDialogRef: MatDialogRef<ModeloabmComponent>,
              private formacionService: FormacionService) { }

  ngOnInit(): void {

      this.openModal(this.data.mode, this.data.formacion);

  } 



// METODO OPEN MODO -----------------------------------------------
  public openModal(mode: String, formacion?: Formacion):void{
    
    if(mode==='add'){
      this.tituloabm ="Añadir formación";
      this.banderola = false;
    }else if(mode==='edit'){      
      this.tituloabm="Editar formación";
      this.banderola = true;
      if(formacion){        
        this.dataFormacion=formacion;
      }
    }
  }


  public onSubmitFormacion(addForm: NgForm){

    if(!this.banderola){
      this.onAddFormacion(addForm);
    }else{
      this.onUpdateFormacion(addForm.value);
    }

  }


  // METODO AÑADIR -----------------------------------------------
  public onAddFormacion(addForm: NgForm){

    document.getElementById('add-formacion-form')?.click();
    this.formacionService.addFormacion(addForm.value).subscribe({
      next: (response: Formacion)=>{
        console.log(response);
               // this.getFormacion();
        addForm.reset();
        
        this.matDialogRef.close(true);
      },
      error:(error: HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    })

  }

 

  // METODO ACTUALIZAR -----------------------------------------------
  public onUpdateFormacion(formacion: Formacion){

    document.getElementById('add-formacion-form')?.click();
    this.formacionService.updateFormacion(formacion).subscribe({
      next: (response: Formacion)=>{
        console.log(response);
          //this.getFormacion();
          this.matDialogRef.close(true);
      },
      error:(error: HttpErrorResponse)=>{
        alert(error.message);
      }
    })

  }


}
