import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemesterComponent } from './semester.component';
import { SemesterService } from './semester.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    SemesterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [SemesterService]
})
export class SemesterModule { }
