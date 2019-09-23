import {Component, OnDestroy, OnInit} from '@angular/core';
import {WordpressService} from '../services/wordpress.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [WordpressService]
})
export class HomePage implements OnInit, OnDestroy {
  title: string;
  items: any[];
  loading: boolean;

  constructor(public wordpressService: WordpressService) {
    // for debug log
    console.log('HomePage constructor() was celled!');
    this.title = 'PWA記事一覧';
  }

  ngOnInit() {
    // for debug log
    console.log('HomePage ngOnInit() was celled!');
    this.loading = true;
    this.wordpressService.getPosts().subscribe(data => {
      this.title = 'PWA記事一覧（' + data.posts.length + '件）';
      this.items = data.posts;
      this.loading = false;
    });
  }

  ngOnDestroy() {
    // for debug log
    console.log('HomePage ngOnDestroy() was celled!');
  }
}
