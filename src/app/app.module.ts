import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpService } from './core/http/http.service';
import { BatchModule } from './features/batch/batch.module';
import { SharedModule } from './shared/shared.module';
import { SubjectsComponent } from './subjects/subjects.component';
import { StudentsComponent } from './students/students.component';
import { ResultComponent } from './result/result.component';






@NgModule({
  declarations: [
    AppComponent,
    SubjectsComponent,
    StudentsComponent,
    ResultComponent,
  
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


