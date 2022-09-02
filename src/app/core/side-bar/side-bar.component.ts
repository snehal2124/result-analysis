import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  readonly sideNav = [
    {
      name: "Dashboard",
      route: "dashboard"
    },
    {
      name: "Specializations",
      route: "specializations"
    },
    {
      name: "Batches",
      route: "batches"
    },
    {
      name: "Subjects",
      route: "subjects"
    },
    {
      name: "Semester",
      route: "semester"
    },

    {
      name: "Staff",
      route: "staff"
    },
    {
      name: "Students",
      route: "students"
    },
    {
      name: "Results",
      route: "results"
    }
  ]

  constructor(
    private router: Router,
    private authService: AuthService,
    private tokenStorageService: TokenStorageService
  ) { }

  ngOnInit(): void {
  }

  getUserName() {
    const user = this.tokenStorageService.getUser();
    return user ? `${user.first_name} ${user.last_name}` : `User`;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
