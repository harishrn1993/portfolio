import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  constructor(private router: Router) { }

  navigate() {
    window.open("https://www.linkedin.com/in/harish-r-n-71a0a660/", "_blank");
  }
}
