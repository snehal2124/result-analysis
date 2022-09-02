import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.authService.isUserLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

  login() {
    const { email, password } = this.form;
    this.authService.login(email, password).subscribe((data) => {
      this.tokenStorageService.saveToken(data.jwt);
      this.tokenStorageService.saveUser(data.user);
      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.router.navigate(['/dashboard']);
    }, (error) => {
      this.errorMessage = 'Login Failed';
      this.isLoginFailed = true;
    })
  }

}
