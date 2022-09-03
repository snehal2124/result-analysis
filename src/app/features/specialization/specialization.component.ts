import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
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
  pageSize = 10;

  actionType: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private specializationService: SpecializationService
  ) { }

  ngOnInit(): void {
    this.specializationForm = this.formBuilder.group({
      id: new FormControl(''),
      code: new FormControl({ value: '', disabled: true }),
      name: new FormControl('', Validators.required),
      no_of_years: new FormControl('', [Validators.required, Validators.pattern(/^\[0-9]{1}$/g)]),
      no_of_semesters: new FormControl('', [Validators.required, Validators.pattern(/^(19|20)\d{2}$/)]),
    });
    this.specializationForm.get('name')?.valueChanges
      .subscribe((value) => this.specializationForm.get('code')?.setValue(value?.toUpperCase()))
    this.getSpecializations();
  }

  getSpecializations() {
    this.specializationService.getSpecializations().subscribe((specializations) => {
      this.specializations = specializations.map((specializations: any, index: number) => ({ ...specializations, index: index + 1 }));
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

  openEditSpecializationModal(specialization: any, content: any) {
    this.actionType = 'edit';
    const { id, code, name, no_of_years, no_of_semesters } = specialization;
    this.specializationForm.setValue({ id, code, name, no_of_years, no_of_semesters });
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

  openDeleteSpecializationModal(specialization: any, content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.deleteSpecialization(specialization);
    }, (reason) => {
      console.log(`Dismissed`);
    });
  }

  deleteSpecialization(specialization: any) {
    this.specializationService.deleteSpecialization(specialization.id).subscribe((val) => {
      this.getSpecializations()
    });
  }
}

