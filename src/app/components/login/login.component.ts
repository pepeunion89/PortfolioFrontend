import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { LoadingComponent } from '../loading/loading.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorInicio:boolean = false;
  user:any = {};
  public dialogRef: MatDialogRef<LoadingComponent>;

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  login(){
    let formulario: any = document.getElementById("login");
    let formularioValido: boolean = formulario.reportValidity();
    if(formularioValido){
      this.dialogRef = this.dialog.open(LoadingComponent, {panelClass: 'dialog-loading'}); // dialog loading se muestra      
      this.loginService().subscribe(
        data=>this.iniciarSesion(data))
    }
  }

  iniciarSesion(resultado:any){
    if(resultado){
      localStorage.setItem("user", JSON.stringify(resultado));
      location.href=("/");
    }else{
      this.errorInicio = true;
    }
  }

  loginService(){

    var httpOptions = {
      headers: new HttpHeaders({
        'contento-type':'application/json'
      })
    }  
      return this.http.post<any>("https://portfoliobackend-jxmj.onrender.com/user/login", this.user, httpOptions)
      //return this.http.post<any>("http://localhost:8080/user/login", this.user, httpOptions)
  }

  crearCuenta(){
    location.href="/signin"
  }

  volver(){
    location.href=("/");
  }

}
