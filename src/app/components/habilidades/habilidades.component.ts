import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { NgForm } from '@angular/forms';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/services/habilidades.service';
import { ServicemanagerService } from 'src/app/services/servicemanager.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements OnInit {

  public listHabilidades: Habilidades[] = [];
  public editHabilidad: Habilidades | undefined;
  public tiempoRecorrido: any;

  color: ThemePalette = "primary";
  modeProgressSpinner: ProgressSpinnerMode = 'determinate';
 // value: number = 0;

  constructor(private habilidadesService: HabilidadesService, private servicio: ServicemanagerService) { 
    
  }

  ngOnInit(): void {

/*    setTimeout(()=>{
      this.value=50;
    },100);
*/
    this.getHabilidades();  

  }

  // METODO GET -----------------------------------------------
  public getHabilidades():void{
    this.habilidadesService.getHabilidades().subscribe({
      next:(Response: Habilidades[])=>{
        this.listHabilidades=Response;

        document.documentElement.style.setProperty('--tiempo-recorrido', this.listHabilidades.length*3+"s");
        document.documentElement.style.setProperty('--tamanio-recorrer-x', (((this.listHabilidades.length*300)*0.80)*(-1))+"px");
        document.documentElement.style.setProperty('--tamanio-recorrer-y', (((this.listHabilidades.length*300)*0.95)*(-1))+"px");
      },
      error:(error: HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public abrirDialogoModeloabm(mode: String, habilidades?: Habilidades){
    this.servicio.mostrarContenidoModeloHabilidadesabm(mode, habilidades).subscribe(res =>{
      console.log(res);
      if(res){
        this.getHabilidades();
      }
    });
  }

  public deleteHabilidades(habilidades: Habilidades):void{

    this.habilidadesService.deleteHabilidades(habilidades.idSkills).subscribe(res =>{
      this.listHabilidades = this.listHabilidades.filter((habilidadItera)=>{
        if(habilidadItera.idSkills===habilidades.idSkills){
          return false;
        }else{          
          return true;
        }
      })
    })

  }

  
}
