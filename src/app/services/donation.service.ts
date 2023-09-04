import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donation } from '../shared/models/donation.model';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  private url: string = `${environment.url}/donations`;

  constructor(private _http: HttpClient) { }
  
  create(donation: Donation): Observable<Donation> {
    return this._http.post<Donation>(`${this.url}`, donation);
  }

  read(): Observable<Donation[]> {
    return this._http.get<Donation[]>(`${this.url}`);
  }

  readById(id: string | null): Observable<Donation> {
    return this._http.get<Donation>(`${this.url}/${id}`);
  }

  update(id: number, donation: Donation): Observable<Donation> {
    return this._http.put<Donation>(`${this.url}/${id}`, donation);
  }

  delete(id: number): Observable<Donation> {
    return this._http.delete<Donation>(`${this.url}/${id}`);
  }
}
