import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfirmacaoPresencaService {

  apiRoot: string = 'http://localhost:3000'

  dadosForm: any;

  constructor(private http: HttpClient) { }

  enviarEmailService(dadosForm: any) {
    return this.http.post(`${this.apiRoot}/send`, {
      dadosForm
    })
  }
}
