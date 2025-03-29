import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Institutions } from '../class/institutions';

@Injectable({
  providedIn: 'root'
})
export class GeneralserviceService {
  
  private baseURL="http://localhost:8080/institutions"
  constructor(private HttpClient: HttpClient) { }


  getGeneralList():Observable<Institutions[]>{
    return this.HttpClient.get<Institutions[]>(`${this.baseURL}`);
  }
}
