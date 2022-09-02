import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

enum userType {
  admin = 'admin',
  staff = 'staff'
}

interface IUser {
  first_name: string,
  last_name: string,
  type: userType,
}
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  user: IUser;
  readonly sideNav = {
    admin: [
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
    ],
    staff: [
      {
        name: "Dashboard",
        route: "dashboard"
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
  }
  constructor(
    private router: Router,
    private authService: AuthService,
    private tokenStorageService: TokenStorageService
  ) {
    this.user = this.tokenStorageService.getUser();
  }

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
