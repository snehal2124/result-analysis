import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  [x: string]: any;

  subjects: any[] = [];
  subjectForm: FormGroup = this['formBuilder'].group({FormGroup});

  page = 1;
  pageSize = 2;

  actionType: string = '';
  


  constructor() { }

  ngOnInit(): void {
    this.subjectForm = this['formBuilder'].group({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      code: new FormControl(''), 
      total_marks: new FormControl('', [Validators.required, Validators.pattern(/^\[0-9]{1}$/g)]),
      semester_id: new FormControl('', [Validators.required, Validators.pattern(/^(19|20)\d{2}$/)]),
    
    });
    this.getSubjects();
  }

  getSubjects() {
    this['subjectsService'].getSubjects().subscribe((val: any[]) => {
      this.subjects = val;
    });
  }

  openAddSubjectsModal(content: any) {
    this.subjectForm.reset();
    this.actionType = 'add';
    this['modalService'].open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result: any) => {
      console.log(`Closed with: ${result}`);
    }, (reason: any) => {
      console.log(`Dismissed`);
    });
  }

  createSubjects() {
    const formValues = this.subjectForm.getRawValue();
    this['subjectsService'].createSubjects(formValues).subscribe((val: any) => {
      this['modalService'].dismissAll()
      this.getSubjects();
    });
  }

  openEditSubjectsModal(batch: any, content: any) {
    this.actionType = 'edit';
    this.subjectForm.setValue(batch);
    this['modalService'].open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result: any) => {
      console.log(`Closed with: ${result}`);
    }, (reason: any) => {
      console.log(`Dismissed`);
    });
  }

  updateSubjects() {
    const formValues = this.subjectForm.getRawValue();
    this['subjectsService'].updateSubjects(formValues).subscribe((val: any) => {
      this['modalService'].dismissAll();
      this.getSubjects();
    });
  }

  openDeleteSubjectsModal(subjects: any, content: any) {
    this['modalService'].open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result: any) => {
      this.deleteSubjects(subjects);
    }, (reason: any) => {
      console.log(`Dismissed`);
    });
  }

  deleteSubjects(subjects: any) {
    this['subjectsService'].deleteBatch(subjects.id).subscribe((val: any) => {
      this.getSubjects()
    });
  }

}
