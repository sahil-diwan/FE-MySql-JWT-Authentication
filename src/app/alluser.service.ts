import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlluserService {

  constructor(private http: HttpClient)  { }
  
    getAllUsers(){
      return this.http.get('/server/findall');
  }
}
