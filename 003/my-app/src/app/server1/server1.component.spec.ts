import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Server1Component } from './server1.component';

describe('Server1Component', () => {
  let component: Server1Component;
  let fixture: ComponentFixture<Server1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Server1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Server1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
