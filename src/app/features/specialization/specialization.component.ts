import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SpecializationService } from './specialization.service';

@Component({
  selector: 'app-specialization',
  templateUrl: './specialization.component.html',
  styleUrls: ['./specialization.component.css']
})
export class SpecializationComponent implements OnInit {

  specializations: any[] = [];
  specializationForm: FormGroup = this.formBuilder.group({});

  page = 1;
  pageSize = 2;

  actionType: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private specializationService: SpecializationService
  ) { }

  ngOnInit(): void {
    this.specializationForm = this.formBuilder.group({
      id: new FormControl(''),
      code: new FormControl(''),
      name: new FormControl('', Validators.required),
      no_of_years: new FormControl('', [Validators.required, Validators.pattern(/^\[0-9]{1}$/g)]),
      start_year: new FormControl('', [Validators.required, Validators.pattern(/^(19|20)\d{2}$/)]),
      end_year: new FormControl('', [Validators.required, Validators.pattern(/^(19|20)\d{2}$/)]),
    });
    this.getSpecializations();
  }
  getSpecializations() {
    this.specializationService.getSpecializations().subscribe((val) => {
      this.specializations = val;
    });
  }

  openAddSpecializationModal(content: any) {
    this.specializationForm.reset();
    this.actionType = 'add';
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed`);
    });
  }

  createSpecialization() {
    const formValues = this.specializationForm.getRawValue();
    this.specializationService.createSpecialization(formValues).subscribe((val) => {
      this.modalService.dismissAll()
      this.getSpecializations();
    });
  }

  openEditSpecializationModal(batch: any, content: any) {
    this.actionType = 'edit';
    this.specializationForm.setValue(batch);
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed`);
    });
  }

  updateSpecialization() {
    const formValues = this.specializationForm.getRawValue();
    this.specializationService.updateSpecialization(formValues).subscribe((val) => {
      this.modalService.dismissAll();
      this.getSpecializations();
    });
  }
}
