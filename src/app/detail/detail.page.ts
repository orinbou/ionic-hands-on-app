import {Component, OnDestroy, OnInit} from '@angular/core';
import {WordpressService} from '../services/wordpress.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit, OnDestroy {
  title: string;
  history; string;
  date: string;
  content: string;
  loading: boolean;

  constructor(public wordpressService: WordpressService, private route: ActivatedRoute) {
    console.log('tab3 constructor() was celled!');
  }

  ngOnInit() {
    console.log('tab3 ngOnInit() was celled!');
    this.loading = true;
    const id = this.route.snapshot.paramMap.get('id');
    this.wordpressService.getPost(id).subscribe(data => {
      this.title = data.title;
      this.date = data.date;
      this.content = data.content;
      this.loading = false;
    });
  }

  ngOnDestroy() {
    console.log('tab3 ngOnDestroy() was celled!');
  }
}
