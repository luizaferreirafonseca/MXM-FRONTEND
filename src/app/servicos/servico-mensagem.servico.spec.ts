import { TestBed } from '@angular/core/testing';

import { ServicoMensagemServico } from './servico-mensagem.servico';

describe('ServicoMensagemService', () => {
  let service: ServicoMensagemServico;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoMensagemServico);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
