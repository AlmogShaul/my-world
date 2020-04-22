import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.less']
})
export class MeComponent implements OnInit {
  sections: any[];

  constructor() {
    this.sections = [
      {imgName: 'code', footer: 'Code'},
      {imgName: 'eat', footer: 'Eat'},
      {imgName: 'fun', footer: 'Fun'},
      {imgName: 'me2', footer: 'Shaul Almog'}
    ];
  }

  ngOnInit(): void {
  }

}
