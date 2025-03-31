import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarElementoDialogComponent } from './agregar-elemento-dialog.component';

describe('AgregarElementoDialogComponent', () => {
  let component: AgregarElementoDialogComponent;
  let fixture: ComponentFixture<AgregarElementoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarElementoDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarElementoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
