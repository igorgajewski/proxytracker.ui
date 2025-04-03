import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import MOCK_CLIENTS from './mock/mock-clients'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient:HttpClient)
  {

  }
  
  getClients():Observable<any>{
    return of(MOCK_CLIENTS);
  }

}
