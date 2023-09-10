import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-short-timeline',
  templateUrl: './short-timeline.component.html',
  styleUrls: ['./short-timeline.component.css']
})
export class ShortTimelineComponent {
  items: NodeListOf<Element> = document.querySelectorAll(".timeline li");

  ngOnInit() {
    this.items = document.querySelectorAll(".timeline li");
    this.checkElementsInView();
  }

  @HostListener("window:scroll", ["$event"])
  onScroll() {
    this.checkElementsInView();
  }

  checkElementsInView() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.isElementInViewport(this.items[i])) {
        this.items[i].classList.add("in-view");
      }
    }
  }

  isElementInViewport(el: Element) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}
