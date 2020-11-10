import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadesMembresComponent } from './dades-membres.component';

describe('DadesMembresComponent', () => {
  let component: DadesMembresComponent;
  let fixture: ComponentFixture<DadesMembresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadesMembresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadesMembresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
