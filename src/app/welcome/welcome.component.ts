import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation} from '@angular/animations';
import { bounce, pulse, bounceIn, flipInX } from 'ng-animate';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(pulse, {
      // Set the duration to 1seconds and delay to 1seconds
      params: { timing: 1, delay: 1 }
    }))])
  ],
})
export class WelcomeComponent implements OnInit {
  bounce = true;
  constructor() { }

  ngOnInit(): void {
  }

}
