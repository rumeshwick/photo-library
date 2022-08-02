import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';

@Directive({
  selector: '[infinite-scroll]',
})
export class InfiniteScrollDirective implements OnInit {
  @Output()
  public onScrollEnd = new EventEmitter<void>();

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.overflow = 'auto';
  }

  ngOnInit(): void {}

  @HostListener('scroll', ['$event'])
  onListenerTriggered(event: Event): void {
    const target = event.target as HTMLElement;
    if (target.offsetHeight + target.scrollTop >= target.scrollHeight) {
      this.onScrollEnd.emit();
    }
  }
}
