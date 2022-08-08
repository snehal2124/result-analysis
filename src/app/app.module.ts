import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpService } from './core/http/http.service';
import { BatchModule } from './features/batch/batch.module';

import { SharedModule } from './shared/shared.module';
import { SpecializationComponent } from './features/specialization/specialization.component';
import { SpecializationModule } from './features/specialization/specialization.module';


@NgModule({
  declarations: [
    AppComponent,
    SpecializationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    BatchModule,
    SpecializationModule,
    ReactiveFormsModule
    
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }


