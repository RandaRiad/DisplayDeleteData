import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../display-delete-data/users';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url="/assets/users.json";
  constructor(public http:HttpClient) {}

getUser():Observable<Users[]>
{   return this.http.get<Users[]>(this.url);
}

deleteUser(first){
  return this.http.delete(this.url,first);
  

}
}
