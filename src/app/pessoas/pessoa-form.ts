import { Component } from '@angular/core';
import { Pessoa } from './pessoa';
import { PessoaService } from './pessoa.service'
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'pessoa-form',
    templateUrl: './pessoa-form.html'
})
export class PessoaForm {
    
    pessoa: Pessoa = new Pessoa();
    form: FormGroup;

    constructor(private _service: PessoaService, private _fb: FormBuilder, private _router: Router, private _route: ActivatedRoute) { 
        this.validarForm();
        this._route.params.subscribe( params => {
            let id = params['id'];
            
            if (id) {
                this._service.buscar(id).subscribe( pessoa => {
                    this.pessoa = pessoa;
                });
            }
        });
    }

    salvar(event) {
        event.preventDefault();
        this._service.salvar(this.pessoa).subscribe(res => {
            this._router.navigate(['/pessoas']);
        });
    }

    private validarForm() {
        this.form = this._fb.group({
            nome: [''],
            cpf: [''],
            nascimento: [''],
            bio: [''],
            photo: ['']
        });
    }
}
