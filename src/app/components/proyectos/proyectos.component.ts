import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Experiencia } from 'src/app/model/experiencia';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { ServicemanagerService } from 'src/app/services/servicemanager.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  public listExperienciaYProyectos: Experiencia[] = [];
  public listProyectos: Experiencia[] = [];
  public editProyectos: Experiencia | undefined;

  user: any = {};

  constructor(private proyectosService: ProyectosService, private servicio: ServicemanagerService) { }

  ngOnInit(): void {

    this.getProyectos();

    this.user = JSON.parse(localStorage.getItem("user")!);

  }

  // METODO GET -----------------------------------------------
  public getProyectos():void{
    this.proyectosService.getProyectos().subscribe({
      next:(Response: Experiencia[])=>{
        this.listExperienciaYProyectos=Response;
        this.listProyectos=[];
        
        for(let proyecto of this.listExperienciaYProyectos){
          if(proyecto.tituloExperiencia==="Freelance"){
            this.listProyectos.push(proyecto);
          }
        }
      },
      error:(error: HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public abrirDialogoModeloProyectosabm(mode: String, proyecto?: Experiencia){
    this.servicio.mostrarContenidoModeloProyectosabm(mode, proyecto).subscribe(res =>{
      console.log(res);
      if(res){
        this.getProyectos();
      }
    });
  }

  public deleteProyecto(proyecto: Experiencia):void{

    this.proyectosService.deleteProyectos(proyecto.idExperiencia).subscribe(res =>{
      this.listProyectos = this.listProyectos.filter((proyectoItera)=>{
        if(proyectoItera.idExperiencia===proyecto.idExperiencia){
          return false;
        }else{          
          return true;
        }
      })
    })

  }


}
