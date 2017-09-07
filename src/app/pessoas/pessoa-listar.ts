import { Component } from '@angular/core';
import { Pessoa } from './pessoa';
import { PessoaService } from './pessoa.service'

@Component({
    moduleId: module.id,
    selector: 'pessoa-listar',
    templateUrl: './pessoa-listar.html'
})
export class PessoaListar {
    
    pessoas: Pessoa[] = [];

    constructor(private _service: PessoaService ) { 
        this._service.listar().subscribe(pessoas => {
            this.pessoas = pessoas;
        })
    }

}
