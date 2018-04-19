import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingComponent } from './training.component';


const routes: Routes = [
    /*{ path: 'training', component: TrainingComponent, canActivate: [AuthGuard] } Commented out for Lazy Loading */
    { path: '', component: TrainingComponent } /* Used instead for Lazy Loading */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule {}
