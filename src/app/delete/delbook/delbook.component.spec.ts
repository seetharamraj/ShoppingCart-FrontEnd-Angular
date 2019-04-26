import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelbookComponent } from './delbook.component';

describe('DelbookComponent', () => {
  let component: DelbookComponent;
  let fixture: ComponentFixture<DelbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
