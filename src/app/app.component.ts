import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pifss';
visible:boolean
nvisible:boolean


  constructor(  ){
    this.visible = false; 
    if(localStorage.getItem('loggedIn')){
      this.visible = true;
    this.nvisible=false;    }
    else{
      this.visible = false;
      this.nvisible=true;

    }

 
}


logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('currentUser');
  localStorage.removeItem('loggedIn');
  window.location.reload();
  /*localStorage.removeItem('currentUser');*/
}

}
