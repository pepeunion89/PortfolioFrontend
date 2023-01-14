import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public usuario: Usuario | undefined;
  public editUsuario: Usuario | undefined;

  constructor(private headerService: HeaderService, private router: Router) { }

  
  ngOnInit(): void {

    this.getUser();

  }

  login(){
    this.router.navigate(['/login']);
  }

  public getUser():void{
    this.headerService.getUsuario().subscribe({
      next: (response: Usuario) => {
        this.usuario=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

}
