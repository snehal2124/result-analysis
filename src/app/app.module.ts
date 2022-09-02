
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
import { UserModule } from './features/user/user.module';

import { SemesterModule } from './features/semester/semester.module';
import { StudentModule } from './features/student/student.module';

import { SharedModule } from './shared/shared.module';
import { SpecializationModule } from './features/specialization/specialization.module';
import { SubjectsModule } from './features/subject/subject.module';
import { ResultModule } from './features/result/result.module';
import { authInterceptorProviders } from './core/interceptor/auth.interceptor';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { DashboardModule } from './features/dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    BatchModule,
    UserModule,
    StudentModule,
    SemesterModule,
    SpecializationModule,
    SubjectsModule,
    ResultModule,
    DashboardModule
  ],
  providers: [HttpService, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }


