import { SubjectsComponent } from './features/subjects/subjects.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Subject } from 'rxjs';
import { BatchComponent } from './features/batch/batch.component';
import { SpecializationComponent } from './features/specialization/specialization.component';

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
    path: 'subjects',
    component: SubjectsComponent
    // loadChildren: () => import('./features/subjects/subjects.services').then(m=> m.SubjectServices)
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
