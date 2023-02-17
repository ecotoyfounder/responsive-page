import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  toggle = false;
  account = "test account";

  onToggleMenu() {
    this.toggle = !this.toggle
  }
}
