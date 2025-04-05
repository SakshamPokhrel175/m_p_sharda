import { Institutions } from './../class/institutions';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralserviceService {
  
  private baseURL="http://localhost:8080/institutions"
  constructor(private HttpClient: HttpClient) { }


  getGeneralList():Observable<Institutions[]>{
    return this.HttpClient.get<Institutions[]>(`${this.baseURL}`);
  }

  createInstitution(institutions:Institutions):Observable<object>{
    return this.HttpClient.post(`${this.baseURL}`,institutions);
  }



}
