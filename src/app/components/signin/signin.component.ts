import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { LoadingComponent } from '../loading/loading.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  user: any = {rolidrol:2};
  public dialogRef: MatDialogRef<LoadingComponent>;

  constructor(private http:HttpClient, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  crear(){
    let formulario: any = document.getElementById("crear");
    let formularioValido: boolean = formulario.reportValidity();
    if(formularioValido){
      this.dialogRef = this.dialog.open(LoadingComponent, {panelClass: 'dialog-loading'}); // dialog loading se muestra   
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
      //return this.http.post<any>("http://localhost:8080/user/add", this.user, httpOptions)
  }


  confirmar(resultado:any){
    if(resultado){
      this.user = {rolidrol:2};
      document.getElementById("abrirUsuarioCreado")?.click();
      this.dialogRef.close();
    }else{
      alert("Error al crear usuario.");
    }
  }

  
  volver(){
    location.href = ("/");
  }

  volverLogin(){
    location.href = ("/login");
  }

}
