import { TestBed } from '@angular/core/testing';

import { GestionMatriculaVehicular } from './gestion-matricula-vehicular';

describe('GestionMatriculaVehicular', () => {
  let service: GestionMatriculaVehicular;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionMatriculaVehicular);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
