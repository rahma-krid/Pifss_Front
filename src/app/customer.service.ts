import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  idc : any;
  constructor(private http : HttpClient) {   }

  private url:string="http://localhost:9997/customer";

      
   getCustomerById(id){
    return this.http.get(this.url+'/'+id)

   }


   UpdateCustomer(body: Customer){
    return this.http.post(this.url+'/update',body)


   }

   

  
}
