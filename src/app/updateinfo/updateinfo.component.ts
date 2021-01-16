import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Customer } from '../customer';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateinfo',
  templateUrl: './updateinfo.component.html',
  styleUrls: ['./updateinfo.component.css']
})
export class UpdateinfoComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute ,private apis : CustomerService,private router :Router) { }

  customerForm : FormGroup;
  customer : Customer;
id:string;
  ngOnInit(): void {

   
  // this.id= (JSON.parse(localStorage.getItem('currentUser'))).userName;   
    // pour avoir objet event pour l'afficher dans la formulaire edit event
   
 this.apis.getCustomerById(12345678)
 .subscribe((data :Customer)=>{
   this.customer=data
   console.log(data)

 })
    
    this.customer = new Customer();
    this.customerForm = new FormGroup({
      'region' : new FormControl(Validators.required),
      'allotmentNumber' : new FormControl(Validators.required),
      'avenueNumber' : new FormControl(Validators.required),
      'street' : new FormControl(),
      'houseNumber' : new FormControl(),
      'floorNumber' : new FormControl(),
      'apartmentNumber' : new FormControl(),
      'civilCardExpirationDate' : new FormControl(),
      'paciNumber' : new FormControl(),
      'mobileNumber' : new FormControl(),
      'email' : new FormControl(),
      'englishName' : new FormControl(),
      'phoneNumber' : new FormControl()
     

    })
  }




  onSubmit() {
   

}






update(){
  
  this.apis.UpdateCustomer(this.customer)
  .subscribe((data)=>{
    console.log(data)
    Swal.fire('Great', 'Information Updated with success', 'success');
    this.router.navigate(['/customer'])  })
}


}
