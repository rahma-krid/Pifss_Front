import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pension } from './pension';

@Injectable({
  providedIn: 'root'
})
export class PensionService {

  idc : any;
  constructor(private http : HttpClient) {   }

  private url1:string="http://localhost:9992/pension-service/provisionpension";
  private url:string="http://localhost:9998/provisionpension";


      
   getCustomersalaryinfoById(id){
    return this.http.get(this.url+'/'+id)

   }

   PerformPension(body: Pension){
    return this.http.post(this.url+'/perform',body)


   }

   

  
}
