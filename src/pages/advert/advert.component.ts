import { Component, OnInit } from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  A11y
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination, A11y]);

@Component({
  selector: 'advert-page',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.scss']
})
export class AdvertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
