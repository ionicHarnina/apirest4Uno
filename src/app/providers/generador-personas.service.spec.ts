import { TestBed } from '@angular/core/testing';

import { GeneradorPersonasService } from './generador-personas.service';

describe('GeneradorPersonasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneradorPersonasService = TestBed.get(GeneradorPersonasService);
    expect(service).toBeTruthy();
  });
});
