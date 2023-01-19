import { Component, Input } from '@angular/core';

@Component({
  selector: 'large-card-component',
  templateUrl: './large-card.component.html',
  styleUrls: ['./large-card.component.scss']
})
export class LargeCardComponent {
  @Input()
  title: string | undefined;

  @Input()
  description: string | undefined;

  @Input()
  company: string | undefined;

  @Input()
  image: string | undefined;// = "/assets/image-with-yellow-bg.png";

  @Input()
  flip: boolean = false;
}
