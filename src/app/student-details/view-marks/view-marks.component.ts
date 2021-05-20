import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddMarksComponent } from './add-marks/add-marks.component';
import { UpdateMarksComponent } from './update-marks/update-marks.component';

@Component({
  selector: 'app-view-marks',
  templateUrl: './view-marks.component.html',
  styleUrls: ['./view-marks.component.css']
})
export class ViewMarksComponent implements OnInit {

  Semesters:String[]=["First","Second"]

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openUpdateMarks(){
    const modalRef = this.modalService.open(UpdateMarksComponent,{ centered: true});
  }

  openAddMarks(){
    const modalRef = this.modalService.open(AddMarksComponent,{ centered: true});
  }
}
