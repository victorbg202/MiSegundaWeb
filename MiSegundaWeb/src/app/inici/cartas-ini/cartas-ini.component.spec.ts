import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartasIniComponent } from './cartas-ini.component';

describe('CartasIniComponent', () => {
  let component: CartasIniComponent;
  let fixture: ComponentFixture<CartasIniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartasIniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartasIniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
