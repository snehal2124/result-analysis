import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SemesterService } from './semester.service';


@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.css']
})
export class SemesterComponent implements OnInit {

  
  semesters: any[] = [];
  semesterForm: FormGroup = this.formBuilder.group({});

  page = 1;
  pageSize = 2;

  actionType: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private semesterService: SemesterService
  ) { }

  ngOnInit(): void {
    this.semesterForm = this.formBuilder.group({
      id: new FormControl(''),
      code: new FormControl(''),
      name: new FormControl('', Validators.required),
    });
    this.getSemesters();
  }

  getSemesters() {
    this.semesterService.getSemesters().subscribe((val) => {
      this.semesters = val;
    });
  }

  openAddSemesterModal(content: any) {
    this.semesterForm.reset();
    this.actionType = 'add';
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed`);
    });
  }

  createSemester() {
    const formValues = this.semesterForm.getRawValue();
    this.semesterService.createSemester(formValues).subscribe((val) => {
      this.modalService.dismissAll()
      this.getSemesters();
    });
  }

  openEditSemesterModal(semester: any, content: any) {
    this.actionType = 'edit';
    this.semesterForm.setValue(semester);
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed`);
    });
  }

  updateSemester() {
    const formValues = this.semesterForm.getRawValue();
    this.semesterService.updateSemester(formValues).subscribe((val) => {
      this.modalService.dismissAll();
      this.getSemesters();
    });
  }

  openDeleteSemesterModal(semester: any, content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.deleteSemester(semester);
    }, (reason) => {
      console.log(`Dismissed`);
    });
  }

  deleteSemester(semester: any) {
    this.semesterService.deleteSemester(semester.id).subscribe((val) => {
      this.getSemesters()
    });
  }

}
