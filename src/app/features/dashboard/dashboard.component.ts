import { Component, OnInit } from '@angular/core';
import { ResultService } from '../result/result.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  results: any[] = [];

  page = 1;
  pageSize = 2;


  constructor(
    private resultService: ResultService
  ) { }

  ngOnInit(): void {
    this.getResults();
  }

  getResults() {
    this.resultService.getResults().subscribe((val) => {
      // this.results = val?.map((result: any, inddex: number) => ({ ...result, index: inddex + 1 }));
    });
  }

}
