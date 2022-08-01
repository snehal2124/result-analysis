import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchComponent } from './batch.component';
import { BatchService } from './batch.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    BatchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [BatchService]
})
export class BatchModule { }
