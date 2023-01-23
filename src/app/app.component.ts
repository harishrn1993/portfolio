import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  @ViewChild('navBarList') navBarList: ElementRef | undefined;

  toggleButtonClicked() {
    console.log(this.navBarList?.nativeElement.classList)
    this.navBarList?.nativeElement.classList.toggle('active')
  }

  onNavListSelected() {
    this.navBarList?.nativeElement.classList.toggle('active')
  }


}
