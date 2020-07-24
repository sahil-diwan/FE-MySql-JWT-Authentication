import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor(private http: HttpClient)  { }

  getBikes(){
    
    return this.http.get('/server/home');
    
}
}