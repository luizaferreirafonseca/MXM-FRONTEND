import { TestBed } from '@angular/core/testing';

import { ServicoMensagemService } from './servico-mensagem.service';

describe('ServicoMensagemService', () => {
  let service: ServicoMensagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoMensagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
