import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigmentdir',
  templateUrl: './assigmentdir.component.html',
  styleUrls: ['./assigmentdir.component.css']
})
export class AssigmentdirComponent implements OnInit {

  isTextDisplay = false;
  logCountArray = [];
  counter = 0;
  constructor() { }

  ngOnInit() {
  }

  togglePara() {
    if(this.isTextDisplay) {
      this.isTextDisplay = false;
    } else {
      this.isTextDisplay = true;
    }
    this.logCountArray.push('log count is: ' +this.counter++);
  }
}
