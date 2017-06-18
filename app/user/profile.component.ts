/**
 * NPM packages.
 */
import {Component, OnInit}        from '@angular/core';
import {FormControl, FormGroup}   from '@angular/forms';
import {Router}                   from '@angular/router';

/**
 * Project packages.
 */
import {AuthService} from './index';

@Component({
  templateUrl: 'app/user/profile.template.html' 
})
export class ProfileComponent implements OnInit {
  profileForm:FormGroup;

  constructor(
    private authService:AuthService,
    private router:Router) {

  }

  ngOnInit(): void {
    let currentUser = this.authService.currentUser;
    // if (!currentUser) {
    //   let route = ['user/login'];
    //   this.router.navigate(route);
    //   return;
    // }

    if (currentUser) {
      let firstName     = new FormControl(currentUser.firstName);
      let lastName      = new FormControl(currentUser.lastName);
      this.profileForm  = new FormGroup({
        firstName,
        lastName
      });
    }
  }

  saveProfile(profileForm) {
    
    let values    = profileForm.value;
    let firstName = values.firstName;
    let lastName  = values.lastName;
    this.authService.updateCurrentuser(firstName, lastName);

    let route = ['events'];
    this.router.navigate(route);
  }

  cancel() {
    let route = ['events'];
    this.router.navigate(route);
  }
}