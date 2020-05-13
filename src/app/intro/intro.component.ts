import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation} from '@angular/animations';
import { bounce, pulse, bounceIn, flipInX } from 'ng-animate';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce, {
      // Set the duration to 1seconds and delay to 1seconds
      params: { timing: 1, delay: 1 }
    }))])
  ],
})
export class IntroComponent implements OnInit {
  bounce = true;
  constructor() { }

  ngOnInit(): void {
  }
  onScrollEvent(){
    console.log('test');
  }











}
