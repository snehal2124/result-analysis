import { SubjectsComponent } from './features/subjects/subjects.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Subject } from 'rxjs';
import { BatchComponent } from './features/batch/batch.component';
import { SpecializationComponent } from './features/specialization/specialization.component';
import { SemesterComponent } from './features/semester/semester.component';
import { StudentComponent } from './features/student/student.component';
import { StaffComponent } from './features/staff/staff.component';

const routes: Routes = [
  {
    path: 'specializations',
    component: SpecializationComponent
  },
  {
    path: 'batches',
    component: BatchComponent
    // loadChildren: () => import('./features/batch/batch.module').then(m => m.BatchModule)
  },
  {
    path: 'semester',
    component: SemesterComponent
  },
  {
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'staff',
    component: StaffComponent
  },
  {
    path: 'subjects',
    component: SubjectsComponent
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
