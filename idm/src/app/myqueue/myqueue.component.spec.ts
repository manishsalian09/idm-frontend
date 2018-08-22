import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyqueueComponent } from './myqueue.component';

describe('MyqueueComponent', () => {
  let component: MyqueueComponent;
  let fixture: ComponentFixture<MyqueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyqueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyqueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
