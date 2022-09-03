import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
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
  @ViewChildren(BaseChartDirective) charts!: QueryList<BaseChartDirective>;

  results: any[] = [];
  specializations: any[] = [];
  batches: any[] = [];
  semesters: any[] = [];
  subjects: any[] = [];

  page = 1;
  pageSize = 10;


  public barChartLegend = true;
  public barChartPlugins = [];

  public batchChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [{ data: [], label: 'Average Marks' }]
  };

  public subjectChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [{ data: [], label: 'Average Marks' }]
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

  filterForm: FormGroup = this.formBuilder.group({});

  constructor(
    private formBuilder: FormBuilder,
    private resultService: ResultService,
    private specializationService: SpecializationService,
    private batchService: BatchService,
    private semesterService: SemesterService,
    private subjectService: SubjectService,
  ) {
    this.filterForm = this.formBuilder.group({
      specialization: new FormControl(),
      batch: new FormControl('all'),
      semester: new FormControl('all'),
      subject: new FormControl('all'),
    });

    this.filterForm.valueChanges.subscribe((value) => {
      this.getResultsByBatch(value);
      this.getResultsBySubject(value);
    });
  }

  ngOnInit(): void {

    // this.filterForm.get('specialization')?.valueChanges.subscribe((value) => {
    //   this.getBatches(value);
    //   this.filterForm.get('batch')?.setValue('all');
    // });
    // this.filterForm.get('batch')?.valueChanges.subscribe((value) => {
    //   this.getSemesters(value);
    //   this.filterForm.get('semester')?.setValue('all');
    // });
    // this.filterForm.get('semester')?.valueChanges.subscribe((value) => {
    //   this.getSubjects(value);
    //   this.filterForm.get('subject')?.setValue('all');
    // });
    this.getResults();
    this.getSpecializations();
    this.getBatches();
    this.getSemesters();
    this.getSubjects();
  }

  getResultsByBatch(filter: any) {
    this.resultService.getResultsByBatch(filter).subscribe((val) => {
      this.batchChartData.labels = val.map((item: any) => item.batch_id__name);
      const dataSetValue = val.map((item: any) => item.avg)
      this.batchChartData.datasets = [{ data: dataSetValue, label: 'Average Marks' }];
      this.updateCharts();
    });
  }

  getResultsBySubject(filter: any) {
    this.resultService.getResultsBySubject(filter).subscribe((val) => {
      this.subjectChartData.labels = val.map((item: any) => item.subject_id__name);
      const dataSetValue = val.map((item: any) => item.avg)
      this.subjectChartData.datasets = [{ data: dataSetValue, label: 'Average Marks' }];
      this.updateCharts();
    });
  }

  updateCharts() {
    this.charts.forEach((child) => {
      child?.chart?.update()
    });
  }

  getResults() {
    this.resultService.getResults().subscribe((val) => {
      this.results = val?.map((result: any, inddex: number) => ({ ...result, index: inddex + 1 }));
    });
  }

  getSpecializations() {
    this.specializationService.getSpecializations().subscribe((val) => {
      this.specializations = val;
      this.filterForm.get('specialization')?.setValue(this.specializations[0]?.id)
    });
  }
  getBatches(filter?: any) {
    let filterParams = '';
    if (filter && filter !== 'all') {
      filterParams = `?specialization=${filter}`
    }
    this.batchService.getBatches(filterParams).subscribe((val) => {
      this.batches = val;
    });
  }
  getSemesters(filter?: any) {
    let filterParams = '';
    if (filter && filter !== 'all') {
      filterParams = `?batch=${filter}`
    }
    this.semesterService.getSemesters(filterParams).subscribe((val) => {
      this.semesters = val;
    });
  }
  getSubjects(filter?: any) {
    let filterParams = '';
    if (filter && filter !== 'all') {
      filterParams = `?semester=${filter}`
    }
    this.subjectService.getSubjects(filterParams).subscribe((val) => {
      this.subjects = val;
    });
  }

}
