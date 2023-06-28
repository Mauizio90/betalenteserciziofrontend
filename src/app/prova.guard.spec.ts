import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { provaGuard } from './prova.guard';

describe('provaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => provaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
