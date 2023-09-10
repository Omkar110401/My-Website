import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.css']
})
export class InternshipComponent {
  isScrolled2500=false
  isScrolled2450=false
  isScrolled2600=false
  isScrolled2800=false
  isScrolled2900=false
  isScrolled3100=false
  @HostListener('window:scroll', ['$event'])
  isScrolled(event: Event): void {
    this.isScrolled2450 = window.scrollY >= 2450;
    this.isScrolled2500 = window.scrollY >= 2500;
    this.isScrolled2600 = window.scrollY >= 2600;
    this.isScrolled2800 = window.scrollY >= 2800;
    this.isScrolled2900 = window.scrollY >= 2900;
    this.isScrolled3100 = window.scrollY >= 3100;
  }
}
