import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators,} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ResultService } from './result.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  results: any[] = [];
  resultForm: FormGroup = this.formBuilder.group({});

  page = 1;
  pageSize = 2;

  actionType: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private resultService: ResultService
  ) { }

  ngOnInit(): void {
    this.resultForm= this.formBuilder.group({
      id: new FormControl(''),
      studentid: new FormControl(''),
      batchid: new FormControl('', Validators.required),
      semesterid: new FormControl('', [Validators.required, Validators.pattern(/^\[0-9]{1}$/g)]),
      subjectid: new FormControl('', [Validators.required, Validators.pattern(/^(19|20)\d{2}$/)]),
      marksobtained: new FormControl('', [Validators.required, Validators.pattern(/^(19|20)\d{2}$/)]),

    });
    this.getResults();
  }

  getResults() {
    this.resultService.getResults().subscribe((val) => {
      this.results = val;
    });
  }

  openAddResultModal(content: any) {
    this.resultForm.reset();
    this.actionType = 'add';
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed`);
    });
  }

  createResult() {
    const formValues = this.resultForm.getRawValue();
    this.resultService.createResult(formValues).subscribe((val) => {
      this.modalService.dismissAll()
      this.getResults();
    });
  }

  openEditResultModal(result: any, content: any) {
    this.actionType = 'edit';
    this.resultForm.setValue(result);
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed`);
    });
  }

  updateResult() {
    const formValues = this.resultForm.getRawValue();
    this.resultService.updateResult(formValues).subscribe((val) => {
      this.modalService.dismissAll();
      this.getResults();
    });
  }

  openDeleteResultModal(result: any, content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.deleteResult(result);
    }, (reason) => {
      console.log(`Dismissed`);
    });
  }

  deleteResult(result: any) {
    this.resultService.deleteResult(result.id).subscribe((val) => {
      this.getResults()
    });
  }
}

