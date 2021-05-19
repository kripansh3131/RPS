import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { ViewMarksComponent } from './student-details/view-marks/view-marks.component';
import { ViewResultComponent } from './student-details/view-result/view-result.component';
import { ViewStudentDetailsComponent } from './student-details/view-student-details/view-student-details.component';
import { StudentLoginComponent } from './student-login/student-login.component';


const routes: Routes = [
  {path:'',component:StudentLoginComponent},
  {path:'add-student',component:AddStudentComponent},
  {path:'student-details',component:StudentDetailsComponent,children:[
    {path:'',component:ViewStudentDetailsComponent},
    {path:'view-marks',component:ViewMarksComponent},
    {path:'view-result',component:ViewResultComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
