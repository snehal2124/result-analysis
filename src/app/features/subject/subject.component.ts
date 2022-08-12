import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SubjectService } from './subject.service';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
 

  subjects: any[] = [];
  subjectForm: FormGroup = this.formBuilder.group({});

  page = 1;
  pageSize = 2;

  actionType: string = '';


  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private subjectService: SubjectService
  ) { }

  ngOnInit(): void {
    this.subjectForm = this.formBuilder.group({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      totalmarks: new FormControl('', Validators.required),
     
    });
    this.getSubjects();
  }

  getSubjects() {
    this.subjectService.getSubjects().subscribe((val) => {
      this.subjects = val;
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
    this.subjectService.createSubject(formValues).subscribe((val) => {
      this.modalService.dismissAll()
      this.getSubjects();
    });
  }

  openEditSubjectModal(subject: any, content: any) {
    this.actionType = 'edit';
    this.subjectForm.setValue(subject);
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

  openDeleteSubjectModal(subject: any, content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.deleteSubject(subject);
    }, (reason) => {
      console.log(`Dismissed`);
    });
  }

  deleteSubject(subject: any) {
    this.subjectService.deleteSubject(subject.id).subscribe((val) => {
      this.getSubjects()
    });
  }

}


  