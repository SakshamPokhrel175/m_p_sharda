import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Institutions } from '../class/institutions';

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {
  private baseURL = 'http://localhost:8080/institutions';

  constructor(private http: HttpClient) {}

  // GET all institutions
  getInstitutionList(): Observable<Institutions[]> {
    return this.http.get<Institutions[]>(this.baseURL);
  }

  // POST: Create new institution
  createInstitution(formData: FormData): Observable<any> {
    return this.http.post(this.baseURL, formData);
  }

  // PUT: Update institution by ID
  updateInstitution(id: number, formData: FormData): Observable<any> {
    return this.http.put(`${this.baseURL}/${id}`, formData);
  }

  // DELETE: Delete institution by ID
  deleteInstitution(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
