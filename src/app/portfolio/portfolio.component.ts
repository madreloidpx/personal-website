import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../_model/portfolio';

@Component({
	selector: 'app-portfolio',
	templateUrl: './portfolio.component.html',
	styleUrls: ['./portfolio.component.css', '../app.component.css']
})
export class PortfolioComponent implements OnInit {
	portfolio: Portfolio[] = [];

	constructor() { 
		this.portfolio.push({
			title: "Test Title 1",
			short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla.",
			details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla.",
			preview_image: "../../assets/placeholder.png",
			url: null
		}) 
		this.portfolio.push({
			title: "Test Title 2",
			short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla.",
			details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla.",
			preview_image: "../../assets/placeholder.png",
			url: null
		})
	}

	ngOnInit(): void {
	}

}
