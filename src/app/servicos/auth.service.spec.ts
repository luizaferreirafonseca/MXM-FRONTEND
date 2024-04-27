import { TestBed } from '@angular/core/testing';

import { AuthServico } from './auth.service';

describe('AuthService', () => {
  let service: AuthServico;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthServico);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
