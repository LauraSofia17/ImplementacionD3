import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dispositivo1Component } from './dispositivo1.component';

describe('Dispositivo1Component', () => {
  let component: Dispositivo1Component;
  let fixture: ComponentFixture<Dispositivo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dispositivo1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dispositivo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
