import { Component, OnInit } from '@angular/core';
import { ConfirmacaoPresencaService } from '../services/confirmacao-presenca.service';

@Component({
  selector: 'app-confirmacao-presenca',
  templateUrl: './confirmacao-presenca.component.html',
  styleUrls: ['./confirmacao-presenca.component.scss']
})
export class ConfirmacaoPresencaComponent implements OnInit {

  dadosForm: any

  constructor(private confirmacaoPresenca: ConfirmacaoPresencaService) { }

  ngOnInit(): void {
  }

  enviarEmail(dadosForm: any) {
    this.confirmacaoPresenca.enviarEmailService(dadosForm).subscribe(
      (res) => {
        let info = res
        console.log(info)
      },
      (error) => {
        console.log('erro', error)
      }
    )
  }

}
