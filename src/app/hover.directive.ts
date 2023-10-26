import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  color: string = this.element.nativeElement.style.backgroundColor;

  constructor(private element: ElementRef, @Inject(DOCUMENT) private document: Document,
  private renderer: Renderer2) {
    // this.element.nativeElement.style.backgroundColor = this.color;
   }
  ngOnInit(): void {
    // this.document.addEventListener('click', (event) => {
    //   if (event.target === this.element.nativeElement) {
    //     this.element.nativeElement.style.backgroundColor = 'green';
    //   } else {
    //     this.element.nativeElement.style.backgroundColor = this.color;
    //   }
    // })
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'violet');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'violet')
    // this.element.nativeElement.style.backgroundColor = 'green';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = this.color;
  }
  
}
