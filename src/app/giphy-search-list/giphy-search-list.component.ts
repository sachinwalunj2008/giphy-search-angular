import { Component, OnInit, Input } from '@angular/core';
import { Giphy } from '../../app/giphy.type';

@Component({
  selector: 'app-giphy-search-list',
  templateUrl: './giphy-search-list.component.html',
  styleUrls: ['./giphy-search-list.component.scss']
})
export class GiphySearchListComponent implements OnInit {

  @Input()
  gifsList: Giphy[] = [];

  constructor() { }

  ngOnInit() {
  }

}
