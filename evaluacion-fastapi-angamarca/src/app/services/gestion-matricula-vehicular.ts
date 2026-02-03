import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Matricula_vehicular } from '../domains/Matricula-vehicular';

@Injectable({
  providedIn: 'root',
})
export class GestionMatriculaVehicular {
  private urlBase = "http://localhost:8000";

  constructor(private http: HttpClient){}

  create(matricula: Matricula_vehicular): Observable<Matricula_vehicular>{
    return this.http.post<Matricula_vehicular>(this.urlBase+"/vehiculos/", matricula);
  }

  getMatriculas(): Observable<Matricula_vehicular[]>{
    return this.http.get<Matricula_vehicular[]>(this.urlBase+"/vehiculos/");
  }

  update(placa: string, matricula: Matricula_vehicular): Observable<Matricula_vehicular>{
    return this.http.put<Matricula_vehicular>(this.urlBase+"/vehiculos/"+placa, matricula);
  }

  delete(placa: string): Observable<any>{
    return this.http.delete(this.urlBase+"/vehiculos/"+placa);
  }
}
