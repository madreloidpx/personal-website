import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-card',
  templateUrl: './vertical-card.component.html',
  styleUrls: ['./vertical-card.component.css', '../app.component.css']
})
export class VerticalCardComponent implements OnInit {
  @Input() title = "";
  @Input() description = "";
  @Input() thumbnail = "";

  constructor() { }

  ngOnInit(): void {
  }

}
