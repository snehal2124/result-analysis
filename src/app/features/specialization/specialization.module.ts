import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecializationComponent } from './specialization.component';
import { SpecializationService } from './specialization.service';



@NgModule({
  declarations: [
    SpecializationComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [SpecializationService]
})
export class SpecializationModule { }
