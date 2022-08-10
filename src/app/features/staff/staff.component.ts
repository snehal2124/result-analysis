import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StaffService } from './staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  staffs: any[] = [];
  staffForm: FormGroup = this.formBuilder.group({});

  page = 1;
  pageSize = 2;

  actionType: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private staffService: StaffService
  ) { }

  ngOnInit(): void {
    this.staffForm = this.formBuilder.group({
      id: new FormControl(''),
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', [Validators.required, Validators.pattern(/^\[0-9]{1}$/g)]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^(19|20)\d{2}$/)]),
      mobile: new FormControl('', [Validators.required, Validators.pattern(/^(19|20)\d{2}$/)]),
    });
    this.getStaffs();
  }

  getStaffs() {
    this.staffService.getStaffs().subscribe((val) => {
      this.staffs = val;
    });
  }

  openAddStaffModal(content: any) {
    this.staffForm.reset();
    this.actionType = 'add';
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed`);
    });
  }

  createStaff() {
    const formValues = this.staffForm.getRawValue();
    this.staffService.createStaff(formValues).subscribe((val) => {
      this.modalService.dismissAll()
      this.getStaffs();
    });
  }

  openEditStaffModal(staff: any, content: any) {
    this.actionType = 'edit';
    this.staffForm.setValue(staff);
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed`);
    });
  }

  updateStaff() {
    const formValues = this.staffForm.getRawValue();
    this.staffService.updateStaff(formValues).subscribe((val) => {
      this.modalService.dismissAll();
      this.getStaffs();
    });
  }

  openDeleteStaffModal(staff: any, content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.deleteStaff(staff);
    }, (reason) => {
      console.log(`Dismissed`);
    });
  }

  deleteStaff(staff: any) {
    this.staffService.deleteStaff(staff.id).subscribe((val) => {
      this.getStaffs()
    });
  }

}
