import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

    mostrar = true;

    frase: any = {
        autor: 'Mariano Rajoy',
        mensaje: 'Es el vecino el que elige al alcalde y es el alcalde el que quiere que sean los vecinos el alcalde'
    };

    fachas: string[] = ['Abascal', 'Casado', 'Rivera'];
}
