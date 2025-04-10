import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import MOCK_CLIENTS from './mock/mock-clients'
import MOCK_PROXIES from './mock/mock-proxies';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) {

  }

  getClients(): Observable<any> {
    return of(MOCK_CLIENTS);
  }
  getClientName(id: number): string {
    return "client_name"
  }
getProxies(): Observable<any>{
  return of(MOCK_PROXIES)
}
}
