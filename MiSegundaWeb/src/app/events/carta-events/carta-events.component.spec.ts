import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaEventsComponent } from './carta-events.component';

describe('CartaEventsComponent', () => {
  let component: CartaEventsComponent;
  let fixture: ComponentFixture<CartaEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
