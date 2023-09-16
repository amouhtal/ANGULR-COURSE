import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  color: string = 'red';

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
}
