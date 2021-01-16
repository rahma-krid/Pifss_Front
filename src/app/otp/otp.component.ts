import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  otpForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    idc:any;
    error = '';

  constructor( private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {

    this.otpForm = this.formBuilder.group({
      otp: ['', Validators.required],
  });


  }


    // convenience getter for easy access to form fields
    get f() { return this.otpForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.otpForm.invalid) {
            return;
        }

        this.loading = true;
       

        this.idc= (JSON.parse(localStorage.getItem('currentUser')))  ;   
        console.log("hellooooooo"+this.idc.token);

        this.authenticationService.loginwithotp(this.f.otp.value,this.idc.userName)
            .subscribe(
                res => {
                  console.log("hello");
                  console.log(res.sent);
                  localStorage.setItem('loggedIn','true');
                  if(res.sent==true){
                    this.router.navigate(['/services']).then(
                      ()=>{
                        window.location.reload();
                      }
                    );
                  }else
                  {
                    this.loading = false;

                  Swal.fire('Oops...', 'OTP Code is wrong!', 'error');

                }
                },
                error => {
                  console.log(error);
                    this.error = error;
                    this.loading = false;
                });
    }

    
      
      

}
