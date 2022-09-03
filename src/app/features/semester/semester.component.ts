import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SemesterService } from './semester.service';
import { SpecializationService } from '../specialization/specialization.service';
import { BatchService } from '../batch/batch.service';


@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.css']
})
export class SemesterComponent implements OnInit {


  semesters: any[] = [];
  batches: any[] = [];
  specializations: any[] = [];
  semesterForm: FormGroup = this.formBuilder.group({});

  page = 1;
  pageSize = 10;

  actionType: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private semesterService: SemesterService,
    private batchService: BatchService,
    private specializationService: SpecializationService,

  ) { }

  ngOnInit(): void {
    this.semesterForm = this.formBuilder.group({
      id: new FormControl(''),
      specialization_id: new FormControl(''),
      batch_id: new FormControl(''),
      code: new FormControl({ value: '', disabled: true }),
      name: new FormControl('', Validators.required),
    });
    this.semesterForm.get('name')?.valueChanges
      .subscribe((value) => this.semesterForm.get('code')?.setValue(value?.toUpperCase()))
    this.getSemesters();
    this.getSpecializations();
    this.getBatches();
  }

  getSemesters() {
    this.semesterService.getSemesters().subscribe((val) => {
      this.semesters = val?.map((result: any, inddex: number) => ({ ...result, index: inddex + 1 }));
    });
  }

  getBatches() {
    this.batchService.getBatches().subscribe((val) => {
      this.batches = val.map((batch: any, index: number) => ({ ...batch, index: index + 1 }));
    });
  }

  getSpecializations() {
    this.specializationService.getSpecializations().subscribe((specializations) => {
      this.specializations = specializations.map((specializations: any, index: number) => ({ ...specializations, index: index + 1 }));
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
    const { id, code, name, specialization_id, batch_id } = semester;
    this.semesterForm.setValue({ id, code, name, specialization_id, batch_id });
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
