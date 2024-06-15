import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-introduction-view',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './introduction-view.component.html',
  styleUrl: './introduction-view.component.scss'
})
export class IntroductionViewComponent {

}
