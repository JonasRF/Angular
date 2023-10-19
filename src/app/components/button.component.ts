import { Component, Input } from '@angular/core';

@Component({
    selector: 'my-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})

export class Button {
    @Input() label: string = '';
    buttonText: string = 'ACESSAR';

    getAlert(){
      alert(this.label);
    }
}
