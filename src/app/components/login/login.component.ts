import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorInicio:boolean = false;
  user:any = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  login(){
    let formulario: any = document.getElementById("login");
    let formularioValido: boolean = formulario.reportValidity();
    if(formularioValido){
      this.loginService().subscribe(
        data=>this.iniciarSesion(data))
    }
  }

  iniciarSesion(resultado:any){
    if(resultado){
      localStorage.setItem("user", JSON.stringify(resultado));
      location.href=("/home");
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
  }

  crearCuenta(){
    location.href="/signin"
  }

}
