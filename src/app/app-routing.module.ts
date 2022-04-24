import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageStudentsComponent } from './manage-students/manage-students.component';

const routes: Routes = [
    {path: '', component: ManageStudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
