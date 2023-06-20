import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.dropdownToggle') isOpen: boolean = false;
  constructor() { }

  @HostListener('click') toggleOpen(): void {
    this.isOpen = !this.isOpen;
  }
}
