import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any[] = [];
  userForm: FormGroup = this.formBuilder.group({});

  page = 1;
  pageSize = 2;

  actionType: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      id: new FormControl(''),
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', [Validators.required, Validators.pattern(/^\[0-9]{1}$/g)]),
      address: new FormControl('', [Validators.required, Validators.pattern(/^(19|20)\d{2}$/)]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^(19|20)\d{2}$/)]),
      mobile: new FormControl('', [Validators.required, Validators.pattern(/^(19|20)\d{2}$/)]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(19|20)\d{2}$/)]),
      type: new FormControl('', [Validators.required, Validators.pattern(/^(19|20)\d{2}$/)]),
    });
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((val) => {
      this.users = val.map((user: any, index: number) => ({ ...user, index: index + 1 }));
    });
  }

  openAddUserModal(content: any) {
    this.userForm.reset();
    this.actionType = 'add';
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed`);
    });
  }

  createUser() {
    const formValues = this.userForm.getRawValue();
    this.userService.createUser(formValues).subscribe((val) => {
      this.modalService.dismissAll()
      this.getUsers();
    });
  }

  openEditUserModal(user: any, content: any) {
    this.actionType = 'edit';
    const { id,first_name,last_name,email,address,mobile,type,password } = user;
    this.userForm.setValue({ id, first_name, last_name, email, address, mobile, type, password });
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed`);
    });
  }

  updateUser() {
    const formValues = this.userForm.getRawValue();
    this.userService.updateUser(formValues).subscribe((val) => {
      this.modalService.dismissAll();
      this.getUsers();
    });
  }

  openDeleteUserModal(user: any, content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.deleteUser(user);
    }, (reason) => {
      console.log(`Dismissed`);
    });
  }

  deleteUser(user: any) {
    this.userService.deleteUser(user.id).subscribe((val) => {
      this.getUsers()
    });
  }

}
