import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Pessoa } from './pessoa';

@Injectable()
export class PessoaService {

    headers: Headers;
    constructor(private _http: Http) { 
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    buscar(id): Observable<Pessoa> {
        var url = 'https://sup-api.herokuapp.com/people/' + id;
        return this._http.get(url).map(res => res.json());
    }

    listar() {
        var url = 'https://sup-api.herokuapp.com/people';
        return this._http.get(url).map(res => res.json());
    }

    salvar(pessoa: Pessoa): Observable<Response> {
        if (pessoa.id) {
            var url = "https://sup-api.herokuapp.com/people/" + pessoa.id; 
            return this._http.put(url, JSON.stringify(pessoa), {headers: this.headers});
        } else {
            var url = "https://sup-api.herokuapp.com/people"; 
            return this._http.post(url, JSON.stringify(pessoa), {headers: this.headers});
        }
    }

    excluir(id): Observable<Response> {
        var url = "https://sup-api.herokuapp.com/people/" + id; 
        return this._http.delete(url, {headers: this.headers});
    }

}