import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { BodyComponent } from './components/body/body.component';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmacaoPresencaComponent } from './components/confirmacao-presenca/confirmacao-presenca.component';
import { MapComponent } from './components/map/map.component';
import { ConfirmacaoPresencaService } from './components/services/confirmacao-presenca.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    ConfirmacaoPresencaComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [ConfirmacaoPresencaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
