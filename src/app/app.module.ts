import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonFunctionalityComponent } from './common-functionality/common-functionality.component';
import { from } from 'rxjs';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { SlidingPictureComponent } from './sliding-picture/sliding-picture.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntroComponent } from './intro/intro.component';
import { AnimateOnScrollModule} from 'ng2-animate-on-scroll';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { GalleryComponent } from './gallery/gallery.component';
import { NgImageSliderModule } from 'ng-image-slider';
@NgModule({
  declarations: [
    AppComponent,
    CommonFunctionalityComponent,
    NavbarComponent,
    MainComponent,
    SlidingPictureComponent,
    WelcomeComponent,
    IntroComponent,
    GalleryComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AnimateOnScrollModule.forRoot(),
    NgbModule,
    NgImageSliderModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA],
  providers: [], 
  bootstrap: [ AppComponent ]
})
export class AppModule { }
