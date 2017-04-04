import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'input-component',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.css']
})

export class InputComponent {
	@Input() voto;
	@Output() addVoto = new EventEmitter<string>();
	
	constructor() {
		console.log('Esta dentro');
	}

	votar():void{
		this.addVoto.emit(this.voto);
	}
}



