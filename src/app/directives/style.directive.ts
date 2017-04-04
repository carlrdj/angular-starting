import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
	selector: '[newstylus]'
})

export class StylusDirective{
	
	constructor(el:ElementRef) {
		el.nativeElement.style.backgroundColor = 'yellow';
		el.nativeElement.style.fontSize = '30px';
	}
}


