import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  private username: string;
 

  constructor(private http:Http) {
    console.log('service is ready');
    this.username = 'SophiaNM';
   }

   getProfile(){
     return this.http.get(environment.apiUrl+ this.username + "?access_token=" + environment.accessToken).pipe(map(res => res.json()));
   }

   getRepos(){
    return this.http.get(environment.apiUrl+ this.username + "/repos?access_token=" + environment.accessToken).pipe(map(res => res.json()));
  }

  updateProfile(username:string){
    this.username = username;
  }
}
  