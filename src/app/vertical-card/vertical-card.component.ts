import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vertical-card',
  templateUrl: './vertical-card.component.html',
  styleUrls: ['./vertical-card.component.css', '../app.component.css']
})
export class VerticalCardComponent implements OnInit {
  @Input() title = "";
  @Input() description = "";
  @Input() details = "";
  @Input() thumbnail = "";
  @Input() collection = [];

  currentPage: number = 0;
  pages: number;
  imageView: string;

  activeModal: NgbActiveModal;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.pages = this.collection.length - 1
    this.imageView = this.collection[this.currentPage]
  }

  open(content) {
    this.activeModal = content
    this.modalService.open(this.activeModal)
  }

  nextPage() {
		if (this.currentPage < this.pages) {
			this.currentPage = this.currentPage + 1
		} else {
			this.currentPage = 0
		}
		this.updatePortfolioView()
	}

  previousPage() {
		if (this.currentPage == 0) {
			this.currentPage = this.pages
		} else {
			this.currentPage = this.currentPage - 1
		}
		this.updatePortfolioView()
	}

  updatePortfolioView(){
		this.imageView = this.collection[this.currentPage]
	}

  close(){
    this.activeModal.close('Close click')
  }

}
