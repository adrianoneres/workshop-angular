import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './home.html'
})
export class Home {

    titulo: string;

    
    constructor() { 
        this.titulo = "Workshop Angular - Totem TI";
    }

   
}
