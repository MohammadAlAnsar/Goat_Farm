import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonFunctionalityComponent } from './common-functionality.component';

describe('CommonFunctionalityComponent', () => {
  let component: CommonFunctionalityComponent;
  let fixture: ComponentFixture<CommonFunctionalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonFunctionalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonFunctionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
