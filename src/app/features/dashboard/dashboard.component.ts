import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChartConfiguration } from 'chart.js';
import { BatchService } from '../batch/batch.service';
import { ResultService } from '../result/result.service';
import { SemesterService } from '../semester/semester.service';
import { SpecializationService } from '../specialization/specialization.service';
import { SubjectService } from '../subject/subject.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  results: any[] = [];
  specializations: any[] = [];
  batches: any[] = [];
  semesters: any[] = [];
  subjects: any[] = [];

  page = 1;
  pageSize = 10;


  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
    // maintainAspectRatio: false
  };

  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    { data: [350, 450, 100], label: 'Series A' },
  ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false,
    // maintainAspectRatio: false
  };
  specialization = new FormControl('all');
  batch = new FormControl('all');
  semester = new FormControl('all');
  subject = new FormControl('all');

  constructor(
    private resultService: ResultService,
    private specializationService: SpecializationService,
    private batchService: BatchService,
    private semesterService: SemesterService,
    private subjectService: SubjectService,
  ) { }

  ngOnInit(): void {
    this.specialization?.valueChanges.subscribe((value) => {
      this.getBatches();
    });
    this.batch.valueChanges.subscribe((value) => {
      this.getSemesters();
    });
    this.semester.valueChanges.subscribe((value) => {
      this.getSubjects();
    });
    this.getResults();
    this.getSpecializations();
    this.getBatches();
    this.getSemesters();
    this.getSubjects();
  }

  getResults() {
    this.resultService.getResults().subscribe((val) => {
      this.results = val?.map((result: any, inddex: number) => ({ ...result, index: inddex + 1 }));
    });
  }

  getSpecializations() {
    this.specializationService.getSpecializations().subscribe((val) => {
      this.specializations = val;
    });
  }
  getBatches(filter?: string) {
    let filterParams = '';
    if(filter){
      filterParams = `?specializations=${filter}`
    }
    this.batchService.getBatches(filterParams).subscribe((val) => {
      this.batches = val;
    });
  }
  getSemesters(filter?: string) {
    let filterParams = '';
    if(filter){
      filterParams = `?batch=${filter}`
    }
    this.semesterService.getSemesters(filterParams).subscribe((val) => {
      this.semesters = val;
    });
  }
  getSubjects(filter?: string) {
    let filterParams = '';
    if(filter){
      filterParams = `?sepcializations=${filter}`
    }
    this.subjectService.getSubjects(filterParams).subscribe((val) => {
      this.subjects = val;
    });
  }

}
