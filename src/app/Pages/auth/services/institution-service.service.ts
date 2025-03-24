import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InstitutionDataType } from '../../../../../INTERFACE/institution';

@Injectable({
  providedIn: 'root',
})
export class InstitutionSelectionService {
  private baseUrl = 'http://localhost:3000/institutions'; // updated port

  constructor(private http: HttpClient) {}

  // ✅ [READ] - Get all institutes
  getInstitutes(): Observable<InstitutionDataType[]> {
    return this.http.get<InstitutionDataType[]>(this.baseUrl);
  }

  // ✅ [CREATE] - Add/save a new institute
  addInstitute(institute: InstitutionDataType): Observable<InstitutionDataType> {
    return this.http.post<InstitutionDataType>(this.baseUrl, institute);
  }

  // ✅ [DELETE] - Remove an institute by ID
  deleteInstitute(id: string): Observable<InstitutionDataType> {
    return this.http.delete<InstitutionDataType>(`${this.baseUrl}/${id}`);
  }

  // ✅ [GET by ID] - Get a single institute by ID
  getInstituteById(id: string): Observable<InstitutionDataType> {
    return this.http.get<InstitutionDataType>(`${this.baseUrl}/${id}`);
  }

  // ✅ [UPDATE] - Update an institute by ID
  updateInstitute(institute: InstitutionDataType): Observable<InstitutionDataType> {
    return this.http.put<InstitutionDataType>(`${this.baseUrl}/${institute.id}`, institute);
  }
}
