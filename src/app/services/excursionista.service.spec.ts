import { TestBed } from '@angular/core/testing';

import { ExcursionistaService } from './excursionista.service';

describe('ExcursionistaService', () => {
  let service: ExcursionistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcursionistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
