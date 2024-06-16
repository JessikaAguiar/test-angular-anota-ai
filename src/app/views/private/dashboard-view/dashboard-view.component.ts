import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ToolbarComponent} from "@shared/components/layout/toolbar/toolbar.component";
import {InputSearchComponent} from "@shared/components/forms/input-search/input-search.component";
import {CommonModule, NgForOf} from "@angular/common";
import {CardComponent} from "@shared/components/card/card.component";
import {HttpClientModule} from "@angular/common/http";
import {DashboardService} from "./dashboard-service/dashboard.service";
import * as diacritics from "diacritics";

@Component({
  selector: 'app-dashboard-view',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ToolbarComponent,
    InputSearchComponent,
    NgForOf,
    CardComponent,
    HttpClientModule
  ],
  templateUrl: './dashboard-view.component.html',
  styleUrl: './dashboard-view.component.scss',
})
export class DashboardViewComponent implements OnInit {
  cards: any[] = [];
  cardsFilter: any[] = [];
  constructor(private dashboardService: DashboardService) {}


  ngOnInit(): void {
    this.initialize()
  }

  searchValue($event: string) {
    const normalizedSearchTerm = this.normalizeText($event);
    this.cardsFilter = this.cards.filter(card => {
      return this.normalizeText(card.title.toLowerCase()).includes(normalizedSearchTerm)
    })
  }

  normalizeText(text: string) {
    return diacritics.remove(text).toLowerCase()
  }


  removeCard($event: string) {
    console.log($event)
  }

  initialize() {
    this.dashboardService.pageable().subscribe((data: any) => {
      this.cards = data.map((card: any) => {
        card.options = this.typeCard(card.type)
        return card
      });
      this.cardsFilter = this.cards;
    });
  }

  typeCard(type: string) {
      switch (type) {
        case "1": {
          return {
            text: 'Paisagem',
            color: '#0157FB',
          }
        }
        case "2": {
          return {
            text: 'Flor',
            color: '#FD0346',
          }
        }
        case "3": {
          return {
            text: 'Pizza',
            color: '#988811',
          }
        }
        default: return {
          text: 'Novos',
          color: '#000000',
        }
      }
  }
}
