import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  login: FormGroup;
  // tslint:disable-next-line:variable-name
  _url = 'http://localhost:3000/Adminlogin';
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private routes: Router) { }

  ngOnInit() {
    this.login = this.formBuilder.group({
      seviceUsername: ['', Validators.required],
      sevicePassword: ['', Validators.required]
    });
  }
  onAdminSubmit() {
    console.log('Value');
    this.http.post(this._url, this.login.value)
      .subscribe((response) => {
        console.log('repsonse ', response);
        // tslint:disable-next-line:one-line
        // tslint:disable-next-line:triple-equals
        if (this.login.value.seviceUsername == 'akshita' && this.login.value.sevicePassword == 123) {
          this.routes.navigate(['admin-nav'], { replaceUrl: true });
        } else {
          alert(' invalid username or password ');
        }
      });
  }

}
