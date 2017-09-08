import { Pipe, PipeTransform } from '@angular/core';
import { Pessoa } from './pessoa';

@Pipe({
    name: 'filtroNome'
})
export class FiltroNome implements PipeTransform {

    transform(pessoas: Pessoa[], digitado: string) {
        digitado = digitado.toLowerCase();
        return pessoas.filter( pessoa => pessoa.name.toLowerCase().includes(digitado) );
    }

}