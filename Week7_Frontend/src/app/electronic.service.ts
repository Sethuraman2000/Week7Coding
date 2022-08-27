import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class ElectronicService {
  private baseUrl = 'http://localhost:9090/'; //Spring Boot End point Root

  constructor(private http: HttpClient) {}

  getProductList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'getitems'); //will change ...As Per ordermanagement
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}deleteitem/${id}`, {
      responseType: 'text',
    });
  }
  // We will try to connect UI to the backend observables,api endpoints, baseurl, subscribe,
  // arrow functions(Lambda expressions).

  createProduct(electronic: object): Observable<object> {
    console.log('sethu', electronic);

    return this.http.post(`${this.baseUrl}` + 'additem',electronic ); //This is the connect between UI
    //and Backend
  }
}

