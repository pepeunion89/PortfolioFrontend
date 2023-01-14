import { Component, OnInit } from '@angular/core';
import { ServicemanagerService } from 'src/app/services/servicemanager.service';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss']
})
export class ContenidoComponent implements OnInit {

  constructor(private servicio: ServicemanagerService) { }

  abrirDialogoExperiencia(){
    this.servicio.mostrarContenidoExperiencia().subscribe(res =>{
      console.log(res);
    });
  }

  abrirDialogoFormacion(){
    this.servicio.mostrarContenidoFormacion().subscribe(res =>{
      console.log(res);
    });
  }

  abrirDialogoHabilidades(){
    this.servicio.mostrarContenidoHabilidades().subscribe(res =>{
      console.log(res);
    });
  }

  abrirDialogoProyectos(){
    this.servicio.mostrarContenidoProyectos().subscribe(res =>{
      console.log(res);
    });
  }
  

  ngOnInit(): void {
  }

}
