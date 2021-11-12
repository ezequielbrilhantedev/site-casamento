import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacaoPresencaComponent } from './confirmacao-presenca.component';

describe('ConfirmacaoPresencaComponent', () => {
  let component: ConfirmacaoPresencaComponent;
  let fixture: ComponentFixture<ConfirmacaoPresencaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmacaoPresencaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacaoPresencaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
