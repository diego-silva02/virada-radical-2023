import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servant } from '../shared/models/servant.model';

@Injectable({
  providedIn: 'root'
})
export class ServantService {

  private url: string = `${environment.url}/servants`;

  constructor(private _http: HttpClient) { }
  
  create(servant: Servant): Observable<Servant> {
    return this._http.post<Servant>(`${this.url}`, servant);
  }

  read(): Observable<Servant[]> {
    return this._http.get<Servant[]>(`${this.url}`);
  }

  readById(id: string | null): Observable<Servant> {
    return this._http.get<Servant>(`${this.url}/${id}`);
  }

  update(id: number, servant: Servant): Observable<Servant> {
    return this._http.put<Servant>(`${this.url}/${id}`, servant);
  }

  delete(id: number): Observable<Servant> {
    return this._http.delete<Servant>(`${this.url}/${id}`);
  }
}
