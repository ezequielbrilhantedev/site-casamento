import { TestBed } from '@angular/core/testing';

import { ConfirmacaoPresencaService } from './confirmacao-presenca.service';

describe('ConfirmacaoPresencaService', () => {
  let service: ConfirmacaoPresencaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmacaoPresencaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
