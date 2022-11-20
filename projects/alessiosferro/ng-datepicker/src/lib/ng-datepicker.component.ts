import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ng-datepicker',
  templateUrl: './ng-datepicker.component.html',
  styleUrls: ['./ng-datepicker.component.scss']
})
export class NgDatepickerComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    console.log('here!');
  }
}
