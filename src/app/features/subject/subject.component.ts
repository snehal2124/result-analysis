import { throwError } from 'rxjs';
import { SemesterService } from './../semester/semester.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SubjectService } from './subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subjects: any[] = [];
  semesters: any[]=[];
  subjectForm: FormGroup = this.formBuilder.group({});

  page = 1;
  pageSize = 10;

  actionType: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private subjectService: SubjectService,
    private semesteronService: SemesterService,
  ) { }

  ngOnInit(): void {
    this.subjectForm = this.formBuilder.group({
      id: new FormControl(''),
      semester_id: new FormControl(''),
      name: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required),
      total_marks: new FormControl('', [Validators.required, Validators.pattern(/^\[0-9]{1}$/g)]),

    });
    this.getSubjects();
    this.getSemesters();
  }

  getSubjects() {
    this.subjectService.getSubjects().subscribe((val) => {
      this.subjects = val.map((subject: any, index: number) => ({ ...subject, index: index + 1}));
    });
  }
  getSemesters(){
    this.semesteronService.getSemesters().subscribe((val) => {
      this.semesters = val;
    });
  }

  openAddSubjectModal(content: any) {
    this.subjectForm.reset();
    this.actionType = 'add';
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed`);
    });
  }

  createSubject() {
    const formValues = this.subjectForm.getRawValue();
    formValues.code = `${formValues?.code?.toUpperCase()}`;
    this.subjectService.createSubject(formValues).subscribe((val) => {
      this.modalService.dismissAll()
      this.getSubjects();
    });
  }

  openEditSubjectModal(subject: any, content: any) {
    this.actionType = 'edit';
    const {id, name, code, total_marks, semester_id,} = subject;
    this.subjectForm.setValue({id, name,code,total_marks, semester_id});
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed`);
    });
  }

  updateSubject() {
    const formValues = this.subjectForm.getRawValue();
    this.subjectService.updateSubject(formValues).subscribe((val) => {
      this.modalService.dismissAll();
      this.getSubjects();
    });
  }

  openDeleteSubjectModal(Subject: any, content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.deleteSubject(Subject);
    }, (reason) => {
      console.log(`Dismissed`);
    });
  }

  deleteSubject(subject: any): void {
    this.subjectService.deleteSubject(subject.id).subscribe((val) => {
      this.getSubjects()
    });
  }

}
