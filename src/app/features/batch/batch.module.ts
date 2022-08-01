import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchComponent } from './batch.component';
import { BatchService } from './batch.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BatchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [BatchService]
})
export class BatchModule { }
