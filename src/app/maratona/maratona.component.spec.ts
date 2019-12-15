import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaratonaComponent } from './maratona.component';

describe('MaratonaComponent', () => {
  let component: MaratonaComponent;
  let fixture: ComponentFixture<MaratonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaratonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaratonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
