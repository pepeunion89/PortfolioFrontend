import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Formacion } from 'src/app/model/formacion';
import { FormacionService } from 'src/app/services/formacion.service';
import { ServicemanagerService } from 'src/app/services/servicemanager.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.scss']
})
export class FormacionComponent implements OnInit {

  public listFormacion: Formacion[] = [];
  public editFormacion: Formacion | undefined;
 // public deleteFormacion: Formacion | undefined;
  
  constructor(private formacionService: FormacionService, private servicio: ServicemanagerService) { }

  ngOnInit(): void {

    this.getFormacion();

  }

  // METODO GET -----------------------------------------------
  public getFormacion():void{
    this.formacionService.getFormacion().subscribe({
      next:(Response: Formacion[])=>{
        this.listFormacion=Response;
      },
      error:(error: HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public abrirDialogoModeloabm(mode: String, formacion?: Formacion){
    this.servicio.mostrarContenidoModeloFormacionabm(mode, formacion).subscribe(res =>{
      console.log(res);
      if(res){
        this.getFormacion();
      }
    });
  }

  public deleteFormacion(formacion: Formacion):void{

    this.formacionService.deleteFormacion(formacion.idFormacion).subscribe(res =>{
      this.listFormacion = this.listFormacion.filter((formacionItera)=>{
        if(formacionItera.idFormacion===formacion.idFormacion){
          return false;
        }else{          
          return true;
        }
      })
    })

  }

  
}
