import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-card',
  templateUrl: './horizontal-card.component.html',
  styleUrls: ['./horizontal-card.component.css', '../app.component.css']
})
export class HorizontalCardComponent implements OnInit {
  @Input() title = "";
  @Input() description = "";
  @Input() url = "";
  @Input() thumbnail = "";

  constructor() { }

  ngOnInit(): void {
  }

}
