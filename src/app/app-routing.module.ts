import { StudentComponent } from './features/student/student.component';
import { SubjectComponent } from './features/subject/subject.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchComponent } from './features/batch/batch.component';
import { SpecializationComponent } from './features/specialization/specialization.component';
import { SemesterComponent } from './features/semester/semester.component';
import { UserComponent } from './features/user/user.component';
import { ResultComponent } from './features/result/result.component';
import { LoginComponent } from './core/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { AdminGuard } from './shared/guards/admin.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'specializations',
    canActivate: [AuthGuard, AdminGuard],
    component: SpecializationComponent
  },
  {
    path: 'batches',
    canActivate: [AuthGuard, AdminGuard],
    component: BatchComponent
  },
  {
    path: 'semester',
    canActivate: [AuthGuard, AdminGuard],
    component: SemesterComponent
  },
  {
    path: 'staff',
    canActivate: [AuthGuard, AdminGuard],
    component: UserComponent
  },
  {
    path: 'subjects',
    canActivate: [AuthGuard, AdminGuard],
    component: SubjectComponent
  },
  {
    path: 'results',
    canActivate: [AuthGuard],
    component: ResultComponent
  },
  {
    path: 'students',
    canActivate: [AuthGuard],
    component: StudentComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
