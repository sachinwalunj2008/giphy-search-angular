import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { HttpClient } from '@angular/common/http';
import { Giphy } from '../app/giphy.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gif-search';
  gifs: Giphy[] = [];
  term: string;

  constructor(private http: HttpClient, private search: SearchService) {
  }
  ngOnInit() {
  }

  giphySearch() {
    this.search.giphySearch(this.term)
      .subscribe((response) => this.gifs = response.data);
  }

}
