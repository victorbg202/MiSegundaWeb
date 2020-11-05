import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaMembresComponent } from './llista-membres.component';

describe('LlistaMembresComponent', () => {
  let component: LlistaMembresComponent;
  let fixture: ComponentFixture<LlistaMembresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlistaMembresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlistaMembresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
