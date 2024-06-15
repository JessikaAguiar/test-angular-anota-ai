import {Component, Input} from '@angular/core';

@Component({
  selector: 'chip',
  standalone: true,
  imports: [],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss'
})
export class ChipComponent {
  @Input() text: string
  @Input() color: string
  @Input() colorBorder: string

}
