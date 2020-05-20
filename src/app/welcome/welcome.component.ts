import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation} from '@angular/animations';
import { bounce, pulse, bounceIn, flipInX } from 'ng-animate';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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
  title = 'appBootstrap';
  
  closeResult: string;

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
}
