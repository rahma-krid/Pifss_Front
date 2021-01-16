import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Help } from '../help';
import { AuthenticationService } from '../authentication.service';
import { PensionService } from '../pension.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute ,private apis : AuthenticationService,private router :Router) { }


  helpForm : FormGroup;
  help : Help;
id:string;

  ngOnInit(): void {

   

 
    
    this.help = new Help();
    this.helpForm = new FormGroup({
      'email' : new FormControl('', [
        Validators.required,
        Validators.email

      ]),
      'mobile':new FormControl('', [
        Validators.required,

      ]),
      'subject' : new FormControl('', [
        Validators.required,

      ])

    })

   


  }



send(){
  console.log(this.help);

    this.apis.sendhelp(this.help)
  .subscribe((data)=>{
    console.log(data);
    Swal.fire('Great', 'Your mail was sent with success!', 'success').then((result)=>
    {
      if (result.isConfirmed){
        
          this.router.navigate(['/about']);

      }
    }

    );

    /*this.router.navigate(['/formation/events'])*/
  })
}

}
