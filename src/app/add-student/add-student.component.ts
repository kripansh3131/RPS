import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  Genders:string[]=["Male","Female"]

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
