import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecializationComponent } from './specialization.component';
import { SpecializationService } from './specialization.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    SpecializationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [SpecializationService]
})
export class SpecializationModule { }
