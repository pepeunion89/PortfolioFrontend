import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

private apiServerUrl='https://portfoliobackend-jxmj.onrender.com'
  //  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getUsuario(): Observable<Usuario>{

    return this.http.get<Usuario>(`${this.apiServerUrl}/usuario/id/0`);

  }

  public updateUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(`${this.apiServerUrl}/update`, usuario);
  }
}
