import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  register_form :  FormGroup;
  error = '';
  constructor(private authenticationService: AuthenticationService, private router:Router
    ) { }

  get f() { return this.register_form.controls; }

  ngOnInit(): void {


    this.register_form=new FormGroup({
      'form_id' : new FormControl()
    
  })
}

register(){
  this.authenticationService.register(this.f.form_id)
            .subscribe(
                
                data => {
                  Swal.fire('Great...', ' You are registred successfully Open Your mail to connect', 'success');
                   
                },
                error => {
                    this.error = error;
                    Swal.fire('Oops...', 'this code is Invalid!', 'error');

                    
                });
}

}
