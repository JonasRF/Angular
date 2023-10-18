import { Component } from '@angular/core';

@Component({
    selector: 'my-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})

export class Button {
    buttonText: string = 'ACESSAR';
}