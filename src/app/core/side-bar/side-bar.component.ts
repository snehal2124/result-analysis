import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  readonly sideNav = [
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
      name: "Users",
      route: "user"
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

  constructor() { }

  ngOnInit(): void {
  }

}
