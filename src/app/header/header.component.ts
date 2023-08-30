import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor( private router: Router) {}
   isLoggedin: boolean = true;
   ngOnInit(){
    var userData = localStorage.getItem('user-Data')
    if(userData == undefined || userData == null) {
      this.isLoggedin = false
    }
   }

   logout() {
    var isConfirm = confirm('Are you sure want to Logout');
    if(isConfirm){
      this.isLoggedin = false
      localStorage.removeItem('user-Data')
      this.router.navigate(["/login"]);
    }
   }
}
