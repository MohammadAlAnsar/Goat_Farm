import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { trigger, transition, useAnimation, state, style, animate} from '@angular/animations';
import { bounce, pulse, bounceIn, flipInX } from 'ng-animate';
import { from } from 'rxjs';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

const style1 = style({
  opacity: 1,
  transform: "translateX(0)"
})

const style2 = style({
  opacity: 0,
  transform: "translateX(-100%)"
})
const style3 = style({
  opacity: 1,
  transform: "translateX(0)"
})
const style4 = style({
  opacity:0,
  transform: "translateX(100%)"
})

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  animations: [
    trigger('foobar', [
      state('show', style1),
      state('hide', style2),
      transition('show => hide', animate('5s ease-out')),
      transition('hide => show', animate('1s ease-in'))
    ]),
    trigger('text', [
      state('visible', style3),
      state('fade', style4),
      transition('visible => fade', animate('5s ease-out')),
      transition('fade => visible', animate('1s ease-in'))
    ])
  ],
  })
export class IntroComponent implements OnInit {
  state = 'hide';
  value = 'fade';
  title = 'appBootstrap';
  
  closeResult: string;
  

  constructor(public el: ElementRef, private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;
    if (scrollPosition >= componentPosition) { //110
      this.state = 'show';
      this.value = 'visible';
    } else {
      console.log('I am in else')
      this.state = 'hide';
      this.value = 'fade';
      
    }

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
}
