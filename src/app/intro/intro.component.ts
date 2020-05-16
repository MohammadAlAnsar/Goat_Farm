import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { trigger, transition, useAnimation, state, style, animate} from '@angular/animations';
import { bounce, pulse, bounceIn, flipInX } from 'ng-animate';
import { from } from 'rxjs';

const style1 = style({
  opacity: 1,
  transform: "translateX(0)"
})

const style2 = style({
  opacity: 0,
  transform: "translateX(-100%)"
})
const style3 = style({
  opacity: 0,
  transition: "translateX(50%)"
})
const style4 = style({
  opacity:1,
  transition: "translateX(100%)"
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
    ])
  ],
  })
export class IntroComponent implements OnInit {
  state = 'hide';
  

  constructor(public el: ElementRef) { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;
    if (scrollPosition >= componentPosition) { //110
      this.state = 'show';
      
    } else {
      console.log('I am in else')
      this.state = 'hide';
      
    }

  }
   
}
