import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ToolbarComponent} from "@shared/components/layout/toolbar/toolbar.component";
import {InputSearchComponent} from "@shared/components/forms/input-search/input-search.component";
import {CommonModule, NgForOf} from "@angular/common";
import {CardComponent} from "@shared/components/card/card.component";
import {HttpClientModule} from "@angular/common/http";
import {DashboardService} from "./dashboard-service/dashboard.service";
import * as diacritics from "diacritics";
import {LoadingComponent} from "@shared/components/loadign/loading.component";
import {CardType} from "@shared/types/card-type";

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
    HttpClientModule,
    LoadingComponent
  ],
  templateUrl: './dashboard-view.component.html',
  styleUrl: './dashboard-view.component.scss',
})
export class DashboardViewComponent implements OnInit, OnDestroy {
  cards: any[] = [];
  cardsFilter: any[] = [];
  loading: boolean = false;
  showBtnGet: boolean = false;
  constructor(private dashboardService: DashboardService) {}

  ngOnDestroy(): void {
    this.dashboardService.clearLocalStorage()
  }


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
    this.cardsFilter = this.dashboardService.delete($event)
    this.cards = this.cardsFilter

    if(!(this.cardsFilter.length > 0)) {
      this.showBtnGet = true
    }
  }

  initialize() {
    this.loading = true;
    this.dashboardService.pageable().subscribe((data: any) => {
      this.cards = data.map((card: CardType) => {
        card.options = this.typeCard(card.type)
        return card
      })
      this.cardsFilter = this.cards
      this.dashboardService.create(this.cardsFilter)
      this.loading = false
      this.showBtnGet = false
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
