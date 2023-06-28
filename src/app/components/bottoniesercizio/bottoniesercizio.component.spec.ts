import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottoniesercizioComponent } from './bottoniesercizio.component';

describe('BottoniesercizioComponent', () => {
  let component: BottoniesercizioComponent;
  let fixture: ComponentFixture<BottoniesercizioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottoniesercizioComponent]
    });
    fixture = TestBed.createComponent(BottoniesercizioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
