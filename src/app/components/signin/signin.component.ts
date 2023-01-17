import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  user: any = {rolidrol:2};

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  crear(){
    let formulario: any = document.getElementById("crear");
    let formularioValido: boolean = formulario.reportValidity();
    if(formularioValido){
      this.createService().subscribe(
        data=>this.confirmar(data))
    }
  }

  createService(){
    var httpOptions = {
      headers: new HttpHeaders({
        'contento-type':'application/json'
      })
    }  
      return this.http.post<any>("https://portfoliobackend-jxmj.onrender.com/user/add", this.user, httpOptions)
  }


  confirmar(resultado:any){
    if(resultado){
      alert("¡Usuario creado exitosamente!");
      this.user = {rolidrol:2};
    }else{
      alert("Error al crear usuario.");
    }
  }

  
  volver(){
    location.href = ("/");
  }

}
