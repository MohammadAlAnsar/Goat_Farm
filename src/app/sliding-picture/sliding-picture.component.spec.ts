import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingPictureComponent } from './sliding-picture.component';

describe('SlidingPictureComponent', () => {
  let component: SlidingPictureComponent;
  let fixture: ComponentFixture<SlidingPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidingPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidingPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
