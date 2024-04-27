import { TestBed } from '@angular/core/testing';

import { SessionStorageServico } from './session-storage-servico';

describe('SessionStorageService', () => {
  let service: SessionStorageServico;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionStorageServico);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
