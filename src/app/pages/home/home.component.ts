import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  state = "off"
  toggler = true;

  constructor(private router: Router) {
  }

  onToggle(state: string) {
    this.state = state
    this.toggler = !this.toggler
  }

  refresh() {
    this.router.navigate(['/chats'])
  }
}
