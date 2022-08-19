import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultService } from './result.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbPagination,  } from '@ng-bootstrap/ng-bootstrap';
import { ResultComponent } from './result.component';


@NgModule({
  declarations: [
      ResultComponent 
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    
  
  ],
  providers: [ResultService]
})
export class ResultModule { 
}
