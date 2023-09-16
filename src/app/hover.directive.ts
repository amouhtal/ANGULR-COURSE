import { Directive } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  color: string = 'red';

  constructor() { }

  
}
