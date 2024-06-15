import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'toolbar',
  standalone: true,
  imports: [],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  constructor(private router:Router) {}

  goToIntroduction() {
    this.router.navigate(['/']);
  }

}
