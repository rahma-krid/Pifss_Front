import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Customer } from '../customer';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Pension } from '../pension';
import { PensionService } from '../pension.service';
import Swal from 'sweetalert2';
import { Customersalary } from '../customersalary';

@Component({
  selector: 'app-performpension',
  templateUrl: './performpension.component.html',
  styleUrls: ['./performpension.component.css']
})
export class PerformpensionComponent implements OnInit {

 
  constructor(private activatedRoute : ActivatedRoute ,private apis : PensionService,private router :Router) { }

  customerForm : FormGroup;
  customersalary : Customersalary;
  pension:Pension;
id:string;
  ngOnInit(): void {

   
  // this.id= (JSON.parse(localStorage.getItem('currentUser'))).userName;   
    // pour avoir objet event pour l'afficher dans la formulaire edit event
   
 this.apis.getCustomersalaryinfoById(12345678)
 .subscribe((data :Customersalary)=>{
   this.customersalary=data
   console.log(data)

 })
    
    this.customersalary = new Customersalary();

    this.customerForm = new FormGroup({
      'totalPension' : new FormControl(Validators.required),
      'pensionAuthority' : new FormControl(Validators.required),
      'deductionsAmount' : new FormControl(Validators.required),
      'netPension' : new FormControl(),
      'ibanNumber' : new FormControl(),
      'numberOfMonthTobeSpent' : new FormControl('', [
        Validators.required,
      ])
      

    })
  }


  get f() { return this.customerForm.controls; }



  onSubmit() {
    this.pension = new Pension(this.customersalary.customerIdentity,this.customersalary.totalPension,this.customersalary.pensionAuthority,this.customersalary.deductionsAmount
      ,this.customersalary.netPension,this.customersalary.ibanNumber,this.f.numberOfMonthTobeSpent.value);
   console.log(this.pension);
    this.apis.PerformPension(this.pension)
.subscribe((data)=>{
  console.log(data)
  Swal.fire('Great', 'Demand sent successfully', 'success');
  this.router.navigate(['/perform'])
})
}





}
