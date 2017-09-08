import { Component } from '@angular/core';
import { Pessoa } from './pessoa';
import { PessoaService } from './pessoa.service'
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'pessoa-form',
    templateUrl: './pessoa-form.html'
})
export class PessoaForm {
    
    pessoa: Pessoa;
    form: FormGroup;

    constructor(private _service: PessoaService, private _fb: FormBuilder, private _router: Router) { 
        this.pessoa = new Pessoa();
        this.form = this._fb.group({
            nome: [''],
            cpf: [''],
            nascimento: [''],
            bio: [''],
            photo: ['']
        });
    }

    salvar(event) {
        event.preventDefault();
        this._service.salvar(this.pessoa).subscribe(res => {
            this._router.navigate(['/pessoas']);
        });
    }
}
