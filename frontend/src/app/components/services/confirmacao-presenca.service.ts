import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfirmacaoPresencaService {

  apiRoot: string = '/api'

  constructor(private http: HttpClient) { }

  enviarEmailService(form: any) {
    return this.http.get(`${this.apiRoot}/send`
    )
  }
}
