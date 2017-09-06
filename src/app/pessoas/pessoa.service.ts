import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Pessoa } from './pessoa';
import 'rxjs/add/operator/map';

@Injectable()
export class PessoaService {

    headers = new Headers();
    constructor(private _http: Http) { }

    listar(): Observable<Pessoa[]> {
        var url = 'https://sup-api.herokuapp.com/people';
        return this._http.get(url).map(res => res.json());
    }

}