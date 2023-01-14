import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getProyectos():Observable<Experiencia[]>{

    return this.http.get<Experiencia[]>(`${this.apiServerUrl}/experiencia/lista`);

  }

  public addProyectos(proyecto: Experiencia):Observable<Experiencia>{
    
    return this.http.post<Experiencia>(`${this.apiServerUrl}/experiencia/add`, proyecto);

  }

  public updateProyectos(proyecto: Experiencia):Observable<Experiencia>{

    return this.http.put<Experiencia>(`${this.apiServerUrl}/experiencia/update`, proyecto);

  }

  public deleteProyectos(id: number):Observable<void>{

    return this.http.delete<void>(`${this.apiServerUrl}/experiencia/delete/${id}`);

  }
}