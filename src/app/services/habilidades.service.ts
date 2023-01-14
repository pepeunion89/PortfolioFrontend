import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Habilidades } from '../model/habilidades';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getHabilidades():Observable<Habilidades[]>{

    return this.http.get<Habilidades[]>(`${this.apiServerUrl}/skills/listado`);

  }

  public addHabilidades(habilidades: Habilidades):Observable<Habilidades>{
    
    return this.http.post<Habilidades>(`${this.apiServerUrl}/skills/add`, habilidades);

  }

  public updateHabilidades(habilidades: Habilidades):Observable<Habilidades>{

    return this.http.put<Habilidades>(`${this.apiServerUrl}/skills/update`, habilidades);

  }

  public deleteHabilidades(id: number):Observable<void>{

    return this.http.delete<void>(`${this.apiServerUrl}/skills/delete/${id}`);

  }

}
