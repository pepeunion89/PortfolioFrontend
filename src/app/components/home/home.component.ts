import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user:any = {
    "correo":"default@default.com",
    "nombre":"default",
    "apellido":"default",
    "fotografia":null,
    "password":"default",
    "rolidrol":2
  };

  constructor() { }

  ngOnInit(): void {      

      if("user" in localStorage){
        
      }else{
        localStorage.setItem("user", JSON.stringify(this.user));
      }  
  }  
  

}
