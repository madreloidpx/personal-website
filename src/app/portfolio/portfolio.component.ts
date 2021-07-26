import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../_model/portfolio';

@Component({
	selector: 'app-portfolio',
	templateUrl: './portfolio.component.html',
	styleUrls: ['./portfolio.component.css', '../app.component.css']
})
export class PortfolioComponent implements OnInit {
	portfolio: Portfolio[] = [];
	maxView: number = 3;
	pages: number;
	currentPage: number = 0;
	portfolioView: Portfolio[] = [];

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
		this.portfolio.push({
			title: "Test Title 3",
			short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla.",
			details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla.",
			preview_image: "../../assets/placeholder.png",
			url: null
		})
		this.portfolio.push({
			title: "Test Title 4",
			short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla.",
			details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla.",
			preview_image: "../../assets/placeholder.png",
			url: null
		})
	}

	ngOnInit(): void {
		this.pages = Math.floor(this.portfolio.length / this.maxView)
		this.updatePortfolioView()
	}

	nextPage() {
		if (this.currentPage < this.pages) {
			this.currentPage = this.currentPage + 1
		} else {
			this.currentPage = 0
		}
		this.updatePortfolioView()
	}

	updatePortfolioView(){
		let articleIndex = this.currentPage * this.maxView
		if (articleIndex + this.maxView > this.portfolio.length) {
			this.portfolioView = this.portfolio.slice(articleIndex, this.portfolio.length)
			console.log(articleIndex, this.portfolio.length)
			console.log(this.portfolioView)
		} else {
			this.portfolioView = this.portfolio.slice(articleIndex, articleIndex + this.maxView)
			console.log(articleIndex, articleIndex + this.maxView)
			console.log(this.portfolioView)
		}
	}

	previousPage() {
		if (this.currentPage == 0) {
			this.currentPage = this.pages
		} else {
			this.currentPage = this.currentPage - 1
		}
		this.updatePortfolioView()
	}

}
