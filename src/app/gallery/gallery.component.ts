import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  title = 'appBootstrap';
  
  closeResult: string;
  
  @ViewChild('nav') slider: NgImageSliderComponent;
  imageObject: Array<object> = [{
    image: '../assets/img/b_w_goat.jpg',
    thumbImage: '../assets/img/b_w_goat_resize.jpg',
    alt: 'alt of image',
    title: 'Black and White'
}, {
  image: '../assets/img/sheep_family.jpg',
  thumbImage: '../assets/img/sheep_family_resize.jpg',
  alt: 'alt of image',
  title: 'Sheep'
}, {
  image: '../assets/img/goat_kid.jpg',
  thumbImage: '../assets/img/goat_kid_resize.jpg',
  alt: 'alt of image',
  title: 'goat-kid'
}, {
  image: '../assets/img/cute_goat.jpg',
  thumbImage: '../assets/img/cute_goat_resize.jpg',
  alt: 'alt of image',
  title: 'goat kid'
}, {
  image: '../assets/img/goat_and_glasses.jpg',
  thumbImage: '../assets/img/goat_and_glasses_resize.jpg',
  alt: 'alt of image',
  title: 'glasses'
}, {
  image: '../assets/img/transparent.jpg',
  thumbImage: '../assets/img/transparent_resize.jpg',
  alt: 'alt of image',
  title: 'transparent'
}, {
  image: '../assets/img/download.png',
  thumbImage: '../assets/img/knife_resize.png',
  alt: 'alt of image',
  title: 'Butcher'
}, {
  image: '../assets/img/wool.jpg',
  thumbImage: '../assets/img/wool_resize.jpg',
  alt: 'alt of image',
  title: 'Wool'
}
];
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  prevImageClick() {
    this.slider.prev();
}

nextImageClick() {
    this.slider.next();
}
  
}
