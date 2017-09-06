import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { MenuComponent } from './componentes/menu/menu.component';
import { PessoaListar } from './pessoas/pessoa-listar';
import { PessoaService } from './pessoas/pessoa.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PessoaListar,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'pessoas',  component: PessoaListar }
    ])
  ],
  providers: [ PessoaService ],
  bootstrap: [AppComponent]
})
export class AppModule { }


