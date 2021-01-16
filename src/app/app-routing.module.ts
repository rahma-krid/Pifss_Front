import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateinfoComponent } from './updateinfo/updateinfo.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { AboutComponent } from './about/about.component';
import { OtpComponent } from './otp/otp.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ServicesComponent } from './services/services.component';
import { AuthGuardService } from './auth-guard.service';
import { PerformpensionComponent } from './performpension/performpension.component';


const routes: Routes = [
    { path: '',     
    component: AboutComponent},
    { path:'login',
    component:LoginComponent,
},
{ path:'customer',
    component:UpdateinfoComponent,
/* canActivate:[AuthGuardService],*/

},
{ path:'perform',
    component:PerformpensionComponent,
/* canActivate:[AuthGuardService],*/

},

{ path:'signup',
    component:SigninComponent,
},
{ path:'about',
component:AboutComponent,
},
{ path:'otp',
component:OtpComponent,
},
{ path:'contact',
component:ContactComponent,
},{ path:'help',
component:HelpComponent,
},
{ path:'feedback',
component:FeedbackComponent,
canActivate:[AuthGuardService],

},
{ path:'services',
component:ServicesComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
