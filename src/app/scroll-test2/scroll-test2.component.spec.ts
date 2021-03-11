import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollTest2Component } from './scroll-test2.component';

describe('ScrollTest2Component', () => {
  let component: ScrollTest2Component;
  let fixture: ComponentFixture<ScrollTest2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollTest2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
