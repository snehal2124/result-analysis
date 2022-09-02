import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'result-analysis';

  constructor(
    public router: Router,
    private authService: AuthService
  ) { }

  isUserLoggedIn() {
    return this.authService.isUserLoggedIn()
  }
}
