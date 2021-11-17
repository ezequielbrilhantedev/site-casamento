import { Component, OnInit } from '@angular/core';
import { ConfirmacaoPresencaService } from '../services/confirmacao-presenca.service';

@Component({
  selector: 'app-confirmacao-presenca',
  templateUrl: './confirmacao-presenca.component.html',
  styleUrls: ['./confirmacao-presenca.component.scss']
})
export class ConfirmacaoPresencaComponent implements OnInit {

  dadosForm: any = {
    nome: '',
    email: '',
    celular: '',
  }

  constructor(private confirmacaoPresenca: ConfirmacaoPresencaService) { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
  }
  enviar(form: any) {
    this.confirmacaoPresenca.enviarEmailService(form).subscribe(
      (res) => {
        let info = res.valueOf()
        console.log('info', info)
      },
      (error) => {
        console.log('erro', error)
      }
    )
  }

}
