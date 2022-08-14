import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResultComponent } from './result.component';



@NgModule({
  declarations: [ResultComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class ResultModule { }
