import { Component } from '@angular/core';
import { Pessoa } from './pessoa';
import { PessoaService } from './pessoa.service'

@Component({
    moduleId: module.id,
    selector: 'pessoa-form',
    templateUrl: './pessoa-form.html'
})
export class PessoaForm {
    
    pessoa: Pessoa;

    constructor(private _service: PessoaService) { 
        
    }

}
