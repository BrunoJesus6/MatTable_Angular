import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableComponent } from './mat-table.component';

describe('MatTableComponent', () => {
  let componente: MatTableComponent;
  let fixture: ComponentFixture<MatTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatTableComponent);
    componente = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar', () => {
    expect(componente).toBeTruthy();
  });
});
