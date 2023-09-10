import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appLazyLoad]'
})
export class LazyLoadDirective {
  private observer!: IntersectionObserver;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(this.handleIntersection.bind(this), {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });
    this.observer.observe(this.elementRef.nativeElement);
  }

  private handleIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add a CSS class to reveal the skill card
        this.elementRef.nativeElement.classList.add('visible');
        // Stop observing this card once it's visible
        this.observer.unobserve(entry.target);
      }
    });
  }
}
