import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentService } from './student.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: any[] = [];
  studentForm: FormGroup = this.formBuilder.group({});

  page = 1;
  pageSize = 2;

  actionType: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      id: new FormControl(''),
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      roll_no: new FormControl('', Validators.required),
      mobile: new FormControl('', [Validators.required, Validators.pattern(/^(19|20)\d{2}$/)]),
      address: new FormControl('', [Validators.required, Validators.pattern(/^(19|20)\d{2}$/)]),
    });
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents().subscribe((val) => {
      this.students = val;
    });
  }

  openAddStudentModal(content: any) {
    this.studentForm.reset();
    this.actionType = 'add';
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed`);
    });
  }

  createStudent() {
    const formValues = this.studentForm.getRawValue();
    this.studentService.createStudent(formValues).subscribe((val) => {
      this.modalService.dismissAll()
      this.getStudents();
    });
  }

  openEditStudentModal(student: any, content: any) {
    this.actionType = 'edit';
    const { id, first_name, last_name, email, mobile, roll_no, address } = student;
    this.studentForm.setValue({ id, first_name, last_name, email, mobile, roll_no, address });
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed`);
    });
  }

  updateStudent() {
    const formValues = this.studentForm.getRawValue();
    this.studentService.updateStudent(formValues).subscribe((val) => {
      this.modalService.dismissAll();
      this.getStudents();
    });
  }

  openDeleteStudentModal(student: any, content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.deleteStudent(student);
    }, (reason) => {
      console.log(`Dismissed`);
    });
  }

  deleteStudent(student: any) {
    this.studentService.deleteStudent(student.id).subscribe((val) => {
      this.getStudents()
    });
  }

}


 