import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SpecializationService } from '../specialization/specialization.service';
import { BatchService } from './batch.service';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {

  batches: any[] = [];
  specializations: any[] = [];
  batchForm: FormGroup = this.formBuilder.group({});

  page = 1;
  pageSize = 2;

  actionType: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private batchService: BatchService,
    private specializationService: SpecializationService,
  ) { }

  ngOnInit(): void {
    this.batchForm = this.formBuilder.group({
      id: new FormControl(''),
      specialization_id: new FormControl(''),
      code: new FormControl({ value: '', disabled: true }),
      name: new FormControl('', Validators.required),
      start_year: new FormControl('', [Validators.required, Validators.pattern(/^(19|20)\d{2}$/)]),
      end_year: new FormControl('', [Validators.required, Validators.pattern(/^(19|20)\d{2}$/)]),
    });
    this.getBatches();
    this.getSpecializations();
  }

  getBatches() {
    this.batchService.getBatches().subscribe((val) => {
      this.batches = val.map((batch: any, index: number) => ({ ...batch, index: index + 1 }));
    });
  }

  getSpecializations() {
    this.specializationService.getSpecializations().subscribe((val) => {
      this.specializations = val;
    });
  }

  openAddBatchModal(content: any) {
    this.batchForm.reset();
    this.actionType = 'add';
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed`);
    });
  }

  createBatch() {
    const formValues = this.batchForm.getRawValue();
    formValues.code = `${formValues.start_year}-${formValues.end_year}`;
    this.batchService.createBatch(formValues).subscribe((val) => {
      this.modalService.dismissAll()
      this.getBatches();
    });
  }

  openEditBatchModal(batch: any, content: any) {
    this.actionType = 'edit';
    const { id, specialization_id, code, name, start_year, end_year } = batch;
    this.batchForm.setValue({ id, specialization_id, code, name, start_year, end_year });
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed`);
    });
  }

  updateBatch() {
    const formValues = this.batchForm.getRawValue();
    this.batchService.updateBatch(formValues).subscribe((val) => {
      this.modalService.dismissAll();
      this.getBatches();
    });
  }

  openDeleteBatchModal(batch: any, content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.deleteBatch(batch);
    }, (reason) => {
      console.log(`Dismissed`);
    });
  }

  deleteBatch(batch: any) {
    this.batchService.deleteBatch(batch.id).subscribe((val) => {
      this.getBatches()
    });
  }

}
