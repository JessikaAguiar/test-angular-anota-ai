import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToolbarComponent} from "@shared/components/layout/toolbar/toolbar.component";
import {CommonModule} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Test Angular Anota Ai';

}
