import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BatchService } from './batch.service';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {

  batches: any[] = [];
  batchForm: FormGroup = this.formBuilder.group({});

  actionType: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private batchService: BatchService
  ) { }

  ngOnInit(): void {
    this.batchForm = this.formBuilder.group({
      id: new FormControl(''),
      code: new FormControl(''),
      name: new FormControl('', Validators.required),
      no_of_years: new FormControl('', [Validators.required, Validators.pattern(/^\[0-9]{1}$/g)]),
      start_year: new FormControl('', [Validators.required, Validators.pattern(/^(19|20)\d{2}$/)]),
      end_year: new FormControl('', [Validators.required, Validators.pattern(/^(19|20)\d{2}$/)]),
    });
    this.getBatches();
  }

  getBatches() {
    this.batchService.getBatches().subscribe((val) => {
      this.batches = val;
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
    this.batchService.createBatch(formValues).subscribe((val) => {
      this.modalService.dismissAll()
      this.getBatches();
    });
  }

  openEditBatchModal(batch: any, content: any) {
    this.actionType = 'edit';
    this.batchForm.setValue(batch);
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
