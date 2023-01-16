import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Formacion } from '../model/formacion';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {

  private apiServerUrl='https://portfoliobackend-jxmj.onrender.com'
  //private apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getFormacion():Observable<Formacion[]>{

    return this.http.get<Formacion[]>(`${this.apiServerUrl}/formacion/lista`);

  }

  public addFormacion(formacion: Formacion):Observable<Formacion>{
    
    return this.http.post<Formacion>(`${this.apiServerUrl}/formacion/add`, formacion);

  }

  public updateFormacion(formacion: Formacion):Observable<Formacion>{

    return this.http.put<Formacion>(`${this.apiServerUrl}/formacion/update`, formacion);

  }

  public deleteFormacion(id: number):Observable<void>{

    return this.http.delete<void>(`${this.apiServerUrl}/formacion/delete/${id}`);

  }

}
