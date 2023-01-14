import { Component, Inject, OnInit } from '@angular/core';
import { ServicemanagerService } from 'src/app/services/servicemanager.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/services/habilidades.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-modeloabmhabilidades',
  templateUrl: './modeloabmhabilidades.component.html',
  styleUrls: ['./modeloabmhabilidades.component.scss']
})
export class ModeloabmhabilidadesComponent implements OnInit {

  public dataHabilidades: Habilidades;
  public tituloabm: String = "";
  private banderola: boolean;

  constructor(private servicio: ServicemanagerService, 
              @Inject(MAT_DIALOG_DATA) public data: any,
              public matDialogRef: MatDialogRef<ModeloabmhabilidadesComponent>,
              private habilidadesService: HabilidadesService) { } 

  ngOnInit(): void {

    this.openModal(this.data.mode, this.data.habilidades);

  }

 // METODO OPEN MODO -----------------------------------------------
 public openModal(mode: String, habilidades?: Habilidades):void{
    
  if(mode==='add'){
    this.tituloabm ="Añadir habilidad";
    this.banderola = false;
  }else if(mode==='edit'){    
    this.tituloabm="Editar habilidad";
    this.banderola = true;
    if(habilidades){        
      this.dataHabilidades=habilidades;
    }
  }
}


public onSubmitHabilidades(addHabi: NgForm){

  if(!this.banderola){
    this.onAddHabilidades(addHabi);
  }else{
    this.onUpdateHabilidades(addHabi.value);
  }

}


// METODO AÑADIR -----------------------------------------------
public onAddHabilidades(addHabi: NgForm){

  document.getElementById('add-skills-form')?.click();
  this.habilidadesService.addHabilidades(addHabi.value).subscribe({
    next: (response: Habilidades)=>{
      console.log(response);
             // this.getHabilidades();
      addHabi.reset();
      
      this.matDialogRef.close(true);
    },
    error:(error: HttpErrorResponse)=>{
      alert(error.message);
      addHabi.reset();
    }
  })

}



// METODO ACTUALIZAR -----------------------------------------------
public onUpdateHabilidades(habilidades: Habilidades){

  alert("ENTRO AL UPDATE DE MODELOABMHABILIDADES");
  document.getElementById('add-skills-form')?.click();
  this.habilidadesService.updateHabilidades(habilidades).subscribe({
    next: (response: Habilidades)=>{
      console.log(response);
        //this.getHabilidades();
        this.matDialogRef.close(true);
    },
    error:(error: HttpErrorResponse)=>{
      alert(error.message);
    }
  })

}


}
