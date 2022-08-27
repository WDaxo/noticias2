import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }
  getTopHeadLines(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=56126c18d83f4cd8995cc29982ef2a68');  }
}
