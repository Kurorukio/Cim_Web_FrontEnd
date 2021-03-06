import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { catchError, map, Observable, retry } from 'rxjs';
import { clients } from '../Models/clients';

const baseUrl = 'http://localhost:3000/Clients' ;

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  [x: string]: any;

  constructor(private httpClient : HttpClient) {}
  findAllClients(): Observable<clients[]>{
    let Clients : clients [];
    return this.httpClient.get<clients[]>( baseUrl ).
    pipe(
      map(data=>
       {Clients=data;
        console.log(Clients) ;
        return Clients}  
      )
     ) ;
  
  }
  create(data: any): Observable<any> {
    return this.httpClient.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.httpClient.delete(baseUrl);
  }
  findByID(KUNDENID: any): Observable<clients> {
    
      return this.httpClient.get<clients>( baseUrl + '/' + KUNDENID ).pipe(retry(1), catchError(this['handleError']));
  }
}
