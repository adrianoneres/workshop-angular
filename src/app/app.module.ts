import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { MenuComponent } from './componentes/menu/menu.component';
import { PessoaListar } from './pessoas/pessoa-listar';
import { PessoaForm } from './pessoas/pessoa-form'
import { PessoaService } from './pessoas/pessoa.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import 'rxjs/add/operator/map';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PessoaListar,
    PessoaForm
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'pessoas',  component: PessoaListar },
      { path: 'pessoas/form',  component: PessoaForm }
    ])
  ],
  providers: [ PessoaService ],
  bootstrap: [AppComponent]
})
export class AppModule { }


