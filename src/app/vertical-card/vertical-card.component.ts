import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vertical-card',
  templateUrl: './vertical-card.component.html',
  styleUrls: ['./vertical-card.component.css', '../app.component.css']
})
export class VerticalCardComponent implements OnInit {
  @Input() title = "";
  @Input() description = "";
  @Input() thumbnail = "";

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content);
  }

}
