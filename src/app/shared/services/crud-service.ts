import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
}
