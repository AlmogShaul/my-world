import {Component, OnInit} from '@angular/core';
import {MeSectionModel} from './models/me-section';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.less']
})
export class MeComponent implements OnInit {
  sections: MeSectionModel[];

  constructor() {
    this.sections = [
      {imgName: 'code', footer: 'Code'},
      {imgName: 'eat', footer: 'Eat'},
      {imgName: 'fun', footer: 'Fun'},
      {imgName: 'me', footer: 'Me'}
    ];
  }

  ngOnInit(): void {
  }

}
