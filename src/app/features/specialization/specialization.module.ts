import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecializationService } from './specialization.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    
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
