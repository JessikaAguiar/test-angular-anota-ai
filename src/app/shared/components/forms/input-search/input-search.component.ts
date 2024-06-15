import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'input-search',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.scss'
})
export class InputSearchComponent {
  @Input() placeholder: string
  @Output() value = new EventEmitter<string>();
  search: string

  sendValue($event: Event) {
    this.value.emit(this.search)
  }

}
