
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpService } from './core/http/http.service';
import { BatchModule } from './features/batch/batch.module';
import { StaffModule } from './features/staff/staff.module';

import { SemesterModule } from './features/semester/semester.module';
import { StudentModule } from './features/student/student.module';

import { SharedModule } from './shared/shared.module';
import { SpecializationModule } from './features/specialization/specialization.module';
import { SubjectsModule } from './features/subject/subject.module';
import { ResultModule } from './features/result/result.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    BatchModule,
    StaffModule,
    StudentModule,
    SemesterModule,
    SpecializationModule,
    SubjectsModule,
    ResultModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }


