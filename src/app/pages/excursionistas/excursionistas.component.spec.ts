import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionistasComponent } from './excursionistas.component';

describe('ExcursionistasComponent', () => {
  let component: ExcursionistasComponent;
  let fixture: ComponentFixture<ExcursionistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcursionistasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcursionistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
