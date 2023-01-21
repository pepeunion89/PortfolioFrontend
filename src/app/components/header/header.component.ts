import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, AfterViewInit} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { HeaderService } from 'src/app/services/header.service';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  public usuario: Usuario | undefined;
  public editUsuario: Usuario | undefined;
  public dialogRef: MatDialogRef<LoadingComponent>;

  constructor(private headerService: HeaderService, private router: Router, private dialog: MatDialog) { }

  user: any = {};
  userCerrarSesion: any = {    
    "correo":"default@default.com",
    "nombre":"default cerrar sesion",
    "apellido":"default",
    "fotografia":null,
    "password":"default",
    "rolidrol":2
  }

  ngOnInit(): void {
      
      this.dialogRef = this.dialog.open(LoadingComponent, {panelClass: 'custom-dialog-container'});       

      this.getUsusario();      
           
      this.user = JSON.parse(localStorage.getItem("user")!);   
        
  }

  ngAfterViewInit(): void {
    
    this.dialogRef.close();

  }
    

  login(){
    location.href ="/login";
  }

  logout(){    
    localStorage.removeItem("user");    
    localStorage.setItem("user", JSON.stringify(this.userCerrarSesion));
    location.href ="/";
  }

  public getUsusario():void{
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
