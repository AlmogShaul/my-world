import {Component} from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'myworld';
  shouldRun: boolean;
  menuIcon = faBars;
  menuOpen: boolean;

  toggleMenuState() {
    this.menuOpen = !this.menuOpen;
  }
}
