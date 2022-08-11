import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecializationService } from './specialization.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpecializationComponent } from './specialization.component';

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
export class SpecializationModule { 
}
