import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';
import { map } from 'rxjs/operators';
import { Help } from './help';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  idc:string;
private host:string="http://localhost:9991";
private host1:string="http://localhost:9992";


private currentUserSubject: BehaviorSubject<User>;
public currentUser: Observable<User>;


constructor(private http: HttpClient) {
  this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  this.currentUser = this.currentUserSubject.asObservable();
}



public get currentUserValue(): User {
  return this.currentUserSubject.value;
}


login(userName: string, password: string) {
  return this.http.post<any>(this.host+"/authenticate", { userName, password })
      .pipe(map(user => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
      }));
}


loginwithotp(otp: string,idc:string): Observable<any> {
  
  this.idc= (JSON.parse(localStorage.getItem('currentUser'))).token;   
  
  return this.http.post<string>(this.host+"/loginwithotp",{responseType: 'text',headers: new HttpHeaders().set('Authorization', this.idc)} , {
    params: {
      otp: otp,
      idc:idc 
    }
    }
    )}


logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('loggedIn');
  /*localStorage.removeItem('currentUser');*/
  this.currentUserSubject.next(null);
}

register(id) :Observable<any>{
  return this.http.post<string>(this.host+"/register",{responseType:'text'} , {
    params: {
      id: id
    }
    })
  

  }

  sendhelp(body: Help){
    return this.http.post<string>(this.host+"/sendhelp",body)

   }

}



