import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ChipComponent} from "@shared/components/chip/chip.component";
import {CardType} from "@shared/types/card-type";

@Component({
  selector: 'card',
  standalone: true,
  imports: [
    ChipComponent,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() card: any
  @Output() delete = new EventEmitter<string>()

  removeCard(id: string) {
    this.delete.emit(id)
  }
}
