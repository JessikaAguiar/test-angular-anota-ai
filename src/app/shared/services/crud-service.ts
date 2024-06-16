import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService<T> {
  constructor(
    protected _http: HttpClient,
    @Inject(String) protected url: string
  ) {}

  pageable(search= ''): Observable<T> {
    return this._http.get<T>(this.url);
  }

  create(payload: any) {
    let data = JSON.stringify(payload)
    localStorage.setItem('dataCard', data)

    return this.findAll();
  }

  update(id: string, payload: any) {
    let listData = this.findAll();

    let data = listData.map((card: any) => {
      if(card.id === id) {
        card = payload
      }
      return card
    })
    let dataJson = JSON.stringify(data)
    localStorage.setItem('dataCard', dataJson)
  }

  delete(id: string) {
    let listData = this.findAll();

    let data = listData.filter((card: any) => card.id !== id)
    let dataJson = JSON.stringify(data)
    localStorage.setItem('dataCard', dataJson)
    return this.findAll()
  }

  findAll() {
    let listJson = localStorage.getItem('dataCard')
    return listJson !== null ? JSON.parse(listJson) : ''
  }

  clearLocalStorage() {
    localStorage.clear()
  }
}
