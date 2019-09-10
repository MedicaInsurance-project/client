import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder, Validators, FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;
  // tslint:disable-next-line:variable-name
  _url = 'http://localhost:3000/Userlogin';
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private routes: Router ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      seviceUsername: ['', Validators.required],
      sevicePassword: ['', Validators.required]
    });
  }
  onUserSubmit() {
    console.log('ca');
    this.http.post(this._url, this.loginForm.value)
      .subscribe((response) => {
        console.log('repsonse ', response);
        // tslint:disable-next-line:one-line
        // tslint:disable-next-line:triple-equals
        if ( this.loginForm.value.seviceUsername == 'akshita' && this.loginForm.value.sevicePassword == 123) {
        this.routes.navigate(['user/dashboard'], { replaceUrl: true });
        } else {
          alert (' invalid username or password ');
        }
      });
      }

}
