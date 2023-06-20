import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'lightblue';
  @Input() secondColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor!: string;

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', this.defaultColor);
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', this.secondColor);
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', this.defaultColor);
  }

  @HostListener('click') mouseclick(): void {
    this.backgroundColor = 'yellow';
  }
}