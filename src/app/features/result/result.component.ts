import { SemesterService } from './../semester/semester.service';
import { StudentService } from './../student/student.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ResultService } from './result.service';
import { BatchService } from '../batch/batch.service';
import { SubjectService } from '../subject/subject.service';
import * as Papa from 'papaparse';
import { SpecializationService } from '../specialization/specialization.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  results: any[] = [];
  students: any[] = [];
  specializations: any[] = [];
  subjects: any[] = [];
  batches: any[] = [];
  semesters: any[] = [];
  resultForm: FormGroup = this.formBuilder.group({});

  page = 1;
  pageSize = 10;

  actionType: string = '';

  excelFile: any;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private resultService: ResultService,
    private specializationService: SpecializationService,
    private studentService: StudentService,
    private batchService: BatchService,
    private semesterService: SemesterService,
    private subjectService: SubjectService,
  ) { }

  ngOnInit(): void {
    this.resultForm = this.formBuilder.group({
      id: new FormControl(''),
      specialization_id: new FormControl(''),
      batch_id: new FormControl(''),
      semester_id: new FormControl(''),
      subject_id: new FormControl('', [Validators.required, Validators.pattern(/^(19|20)\d{2}$/)]),
      student_id: new FormControl(''),
      marks_obtained: new FormControl('', [Validators.required, Validators.pattern(/^(19|20)\d{2}$/)]),
    });
    this.getResults();
    this.getSpecializations();
    this.getStudents();
    this.getSubjects();
    this.getBatches();
    this.getSemesters();
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
  getSubjects() {
    this.subjectService.getSubjects().subscribe((val) => {
      this.subjects = val;
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
    this.resultService.createResult(formValues).subscribe((val) => {
      this.modalService.dismissAll()
      this.getResults();
    });
  }

  openEditResultModal(result: any, content: any) {
    this.actionType = 'edit';
    const { id, specialization_id, student_id, batch_id, semester_id, subject_id, marks_obtained } = result;
    this.resultForm.setValue({
      id,
      specialization_id: specialization_id.id,
      student_id: student_id.id,
      batch_id: batch_id.id,
      semester_id: semester_id.id,
      subject_id: subject_id.id,
      marks_obtained
    });
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

  async handleFileInput(filesData: any) {
    this.excelFile = filesData?.files[0];
  }

  uploadFile(results: any) {
    this.resultService.uploadResults(results).subscribe((val) => {
      console.log('val: ', val);
    });
  }

  openUploadResultModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      if (this.excelFile) {
        Papa.parse(this.excelFile, {
          delimiter: ",",
          header: true,
          complete: (results, file) => {
            console.log("Parsing complete:", results, file);
            this.uploadFile(results.data)
          }
        });
      } else {
        console.log(`Failed`);
      }
    }, (reason) => {
      console.log(`Dismissed`);
    });
  }
}

