import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface NewsTitle {
  title: string
}

export interface SelectedTitles {
  title: string
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  fetchNews(): Observable<any> {
    return this.http.get<any>("https://newsapi.org/v2/everything?q=keyword&apiKey=e7d3729aa3fc46559c2946332c2426ac")
  }

}
