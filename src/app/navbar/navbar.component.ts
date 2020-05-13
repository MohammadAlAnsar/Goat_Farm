import { Component, OnInit } from '@angular/core';
import { NgLocaleLocalization } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.css' ]  
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;
  // private hamburger = document.querySelector('.hamburger');
  private nl = document.getElementsByClassName('n-l');
  // private links =document.querySelector('.n-l li');

  constructor() { }

  ngOnInit(): void {
    // if(this.hamburger){
    //   this.hamburger.addEventListener('click',() => {
    //     this.nl.classList.toggle('open');
    //   });
    // }
  }
  hamburgerClick(){
    console.log('Test');
    console.log(this.nl);
    this.navbarOpen = !this.navbarOpen;
  }

  toggleNavbar(){
    this.navbarOpen = !this.navbarOpen;
  }
}
