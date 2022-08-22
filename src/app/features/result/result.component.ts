import { SemesterService } from './../semester/semester.service';
import { BatchService } from './../../../../result-analysis/src/app/features/batch/batch.service';
import { StudentService } from './../student/student.service';
import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators,} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ResultService } from './result.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  results: any[] = [];
  students: any[] = [];
  batches: any[] = [];
  semesters: any[] = [];
  resultForm: FormGroup = this.formBuilder.group({});

  page = 1;
  pageSize = 2;

  actionType: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private resultService: ResultService,
    private studentService: StudentService,
    private batchService: BatchService,
    private semesterService: SemesterService,
  ) { }

  ngOnInit(): void {
    this.resultForm= this.formBuilder.group({
      id: new FormControl(''),
      subjectid: new FormControl('', [Validators.required, Validators.pattern(/^(19|20)\d{2}$/)]),
      marksobtained: new FormControl('', [Validators.required, Validators.pattern(/^(19|20)\d{2}$/)]),
      student_id: new FormControl(''),
      batch_id: new FormControl(''),
      semester_id: new FormControl(''),
    });
    this.getResults();
    this.getStudents();
    this.getBatches();
    this.getSemesters();
  }

  getResults() {
    this.resultService.getResults().subscribe((val) => {
      this.results = val.map((result:any, inddex: number)=> ({...result, index: inddex + 1}));
    });
  }
  getStudents() {
    this.studentService.getStudents().subscribe((val) => {
      this.students = val;
    });

  }
getBatches() {
    this.batchService.getBatches().subscribe((val) => {
      this.batches = val;
    });
  }
getSemesters() {
      this.semesterService.getSemesters().subscribe((val) => {
        this.semesters = val;
  });
}
  openAddResultModal(content: any) {
    this.resultForm.reset();
    this.actionType = 'add';
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed`);
    });
  }

  createResult() {
    const formValues = this.resultForm.getRawValue();
    formValues.code = `${formValues.student_id}-${formValues.batch_id}-${formValues.semester_id}`;
    this.resultService.createResult(formValues).subscribe((val) => {
      this.modalService.dismissAll()
      this.getResults();
    });
  }

  openEditResultModal(result: any, content: any) {
    this.actionType = 'edit';
    const { id, student_id, batch_id, semester_id,marks_obtained} = result;
    this.resultForm.setValue({id, student_id, batch_id, semester_id,marks_obtained});
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed`);
    });
  }

  updateResult() {
    const formValues = this.resultForm.getRawValue();
    this.resultService.updateResult(formValues).subscribe((val) => {
      this.modalService.dismissAll();
      this.getResults();
    });
  }

  openDeleteResultModal(result: any, content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.deleteResult(result);
    }, (reason) => {
      console.log(`Dismissed`);
    });
  }

  deleteResult(result: any) {
    this.resultService.deleteResult(result.id).subscribe((val) => {
      this.getResults()
    });
  }
}

