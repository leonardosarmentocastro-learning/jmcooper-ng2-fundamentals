/**
 * NPM packages.
 */
import {Component, OnInit}                    from '@angular/core';
import {FormControl, FormGroup, Validators}   from '@angular/forms';
import {Router}                               from '@angular/router';

/**
 * Project packages.
 */
import {AuthService} from './index';

@Component({
  templateUrl: 'app/user/profile.template.html',
  styles: [`
    em { float: right; color: #E05C65; padding-left: 10px; }
    .error input {background-color: #E3C3C5;}
    .error ::-webkit-input-placeholder {color: #999;}
  `]
})
export class ProfileComponent implements OnInit {
  firstName:FormControl;
  lastName:FormControl;
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
      let pattern = {
        mustStartWithAnLetter: '[a-zA-Z].*'
      }

      this.firstName = new FormControl(currentUser.firstName, [Validators.required, Validators.pattern(pattern.mustStartWithAnLetter)]);
      this.lastName  = new FormControl(currentUser.lastName, Validators.required);
      
      this.profileForm  = new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
      });
    }
  }

  cancel() {
    let route = ['events'];
    this.router.navigate(route);
  }

  saveProfile(profileForm) {
    let values    = profileForm.value;
    let firstName = values.firstName;
    let lastName  = values.lastName;
    this.authService.updateCurrentuser(firstName, lastName);

    let route = ['events'];
    this.router.navigate(route);
  }

  validateFirstName() {
    let isValid = this.firstName.valid || this.firstName.untouched;
    return isValid;
  }

  validateLastName() {
    let isValid = this.lastName.valid || this.lastName.untouched;
    return isValid;
  }
}