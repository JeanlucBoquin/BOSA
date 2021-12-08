import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = this.fb.group({
    telefono: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private $cookie: CookieService,
    private $auth: AuthService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  login(): void {
    const biker = this.form.getRawValue();
    this.$auth.signIn(biker).subscribe(resp => {
      const { token } = resp;
      this.$cookie.set('token_access',token, 4, '/')
      this.router.navigateByUrl('/inicio');
    });
  }

}