
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpService } from './core/http/http.service';
import { BatchModule } from './features/batch/batch.module';
import { SemesterComponent } from './features/semester/semester.component';

import { SubjectComponent } from './features/subject/subject.component';
import { SharedModule } from './shared/shared.module';
import { ResultComponent } from './features/result/result.component';
import { StudentComponent } from './features/student/student.component';







@NgModule({
  declarations: [
    AppComponent,
    SemesterComponent,
    SubjectComponent,
    ResultComponent,
    StudentComponent,
    
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    BatchModule,
    
    

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }


