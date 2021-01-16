import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';
import Swal from 'sweetalert2';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
  }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
 private mode=0;
 type="password";
 loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    idc:any;
    error = '';
    matcher = new MyErrorStateMatcher();


    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { 
        // redirect to home if already logged in
        /*if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        }*/
    }

 
  
    
  

    ngOnInit() {
      
        this.loginForm=new FormGroup({
            'id' : new FormControl('', [
                Validators.required,
                Validators.minLength(3)
        
              ]),
        
              'pass' : new FormControl('', [
                Validators.required,
                Validators.minLength(3)
              ]),
        
            });

      
          
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }



    change(){

        if(this.type=="password"){
          this.type="text"
        }
        else {
          this.type="password"
        }
      }



    onSubmit() {
        this.submitted = true;
        console.log("hellooooooo");

        this.loading = true;
        this.authenticationService.login(this.f.id.value, this.f.pass.value)
            .pipe(first())
            .subscribe(
                
                data => {
                    this.router.navigate(['/otp']);
                    this.idc= (JSON.parse(localStorage.getItem('currentUser')))  ;   
                                   console.log("hellooooooo"+this.idc.token);
                },
                error => {
                    this.error = error;
                    Swal.fire('Oops...', 'Invalid Creditianals', 'error');
                    this.loading = false;
                });
    }
}