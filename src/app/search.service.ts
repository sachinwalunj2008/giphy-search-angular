import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  giphySearch(term: string): Observable<any> {

    const url = this.getUrl(term);
     return this.http.get(url);
  }

  getUrl(term: string): string {
    return 'https://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=dc6zaTOxFJmzC';
  }
}
