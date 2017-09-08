import { Component } from '@angular/core';
import { Pessoa } from './pessoa';
import { PessoaService } from './pessoa.service'
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'pessoa-listar',
    templateUrl: './pessoa-listar.html'
})
export class PessoaListar {
    
    pessoas: Pessoa[] = [];

    constructor(private _service: PessoaService, private _router: Router) { 
       this.listarPessoas();
    }

    excluir(id) {
        this._service.excluir(id).subscribe(res => {
            this.listarPessoas();
        })
    }

    private listarPessoas() {
        this._service.listar().subscribe(pessoas => {
            this.pessoas = pessoas;
        })
    }

}
