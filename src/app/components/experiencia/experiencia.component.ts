import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { ServicemanagerService } from 'src/app/services/servicemanager.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {

  public listExperienciaYProyectos: Experiencia[] = [];
  public listExperiencia: Experiencia[] = [];
  public editExperiencia: Experiencia | undefined;

  user: any = {};

  constructor(private experienciaService: ExperienciaService, private servicio: ServicemanagerService) { }

  ngOnInit(): void {

    this.getExperiencia();

    this.user = JSON.parse(localStorage.getItem("user")!);

  }

  // METODO GET -----------------------------------------------
  public getExperiencia():void{
    this.experienciaService.getExperiencia().subscribe({
      next:(Response: Experiencia[])=>{
        this.listExperienciaYProyectos=Response;
        this.listExperiencia=[];
        
        for(let experiencia of this.listExperienciaYProyectos){
          if(experiencia.tituloExperiencia!="Freelance"){
            this.listExperiencia.push(experiencia);
          }
        }
      },
      error:(error: HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public abrirDialogoModeloExperienciaabm(mode: String, experiencia?: Experiencia){
    this.servicio.mostrarContenidoModeloExperienciaabm(mode, experiencia).subscribe(res =>{
      console.log(res);
      if(res){
        this.getExperiencia();
      }
    });
  }

  public deleteExperiencia(experiencia: Experiencia):void{

    this.experienciaService.deleteExperiencia(experiencia.idExperiencia).subscribe(res =>{
      this.listExperiencia = this.listExperiencia.filter((experienciaItera)=>{
        if(experienciaItera.idExperiencia===experiencia.idExperiencia){
          return false;
        }else{          
          return true;
        }
      })
    })

  }


}
