import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  mainUrl = 'https://public-api.wordpress.com/rest/v1.1/sites/ionicjp.wordpress.com/';

  constructor(private http: HttpClient) { }

  // 投稿一覧取得
  public getPosts(): any {
    return this.http.get(this.mainUrl + 'posts/');
  }
}
