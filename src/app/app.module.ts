import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { ViewStudentDetailsComponent } from './student-details/view-student-details/view-student-details.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { HeaderComponent } from './student-details/header/header.component';
import { EditStudentDetailsComponent } from './student-details/view-student-details/edit-student-details/edit-student-details.component';
import { ViewMarksComponent } from './student-details/view-marks/view-marks.component';
import { AddMarksComponent } from './student-details/view-marks/add-marks/add-marks.component';
import { UpdateMarksComponent } from './student-details/view-marks/update-marks/update-marks.component';
import { ViewResultComponent } from './student-details/view-result/view-result.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    StudentLoginComponent,
    ViewStudentDetailsComponent,
    AddStudentComponent,
    HeaderComponent,
    EditStudentDetailsComponent,
    ViewMarksComponent,
    AddMarksComponent,
    UpdateMarksComponent,
    ViewResultComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
