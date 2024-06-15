import { Injectable } from '@angular/core';
import { CrudService } from '@shared/services/crud-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends CrudService<any> {
  constructor(http: HttpClient) {
    super(http, 'https://githubanotaai.github.io/frontend-interview-mock-data/cardlist.json');
  }
}
