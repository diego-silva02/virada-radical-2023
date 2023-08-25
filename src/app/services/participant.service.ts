import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { Participant } from '../shared/models/participant.model';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  private url: string = `${environment.url}/participants`;

  constructor(private _http: HttpClient) { }
  
  create(participant: Participant): Observable<Participant> {
    return this._http.post<Participant>(`${this.url}`, participant);
  }

  read(): Observable<Participant[]> {
    return this._http.get<Participant[]>(`${this.url}`);
  }

  readById(id: number): Observable<Participant> {
    return this._http.get<Participant>(`${this.url}/${id}`);
  }

  update(id: number, participant: Participant): Observable<Participant> {
    return this._http.put<Participant>(`${this.url}/${id}`, participant);
  }

  delete(id: number): Observable<Participant> {
    return this._http.delete<Participant>(`${this.url}/${id}`);
  }
}
