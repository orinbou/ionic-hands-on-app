import {Component, OnDestroy, OnInit} from '@angular/core';
import {WordpressService} from '../services/wordpress.service';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';

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
  currentImage: any;

  constructor(public wordpressService: WordpressService, private camera: Camera) {
    // for debug log
    console.log('HomePage constructor() was celled!');
    this.title = '記事一覧';
  }

  ngOnInit() {
    // for debug log
    console.log('HomePage ngOnInit() was celled!');
    this.loading = true;
    this.wordpressService.getPosts().subscribe(data => {
      this.title = '記事一覧（' + data.posts.length + '件）';
      this.items = data.posts;
      this.loading = false;
    });
  }

  ngOnDestroy() {
    // for debug log
    console.log('HomePage ngOnDestroy() was celled!');
  }

  // カメラ撮影
  takePicture() {
    // for debug log
    console.log('HomePage takePicture() was celled!');
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      console.log('Camera issue:' + err);
    });
  }
}
