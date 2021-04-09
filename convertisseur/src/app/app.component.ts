import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'convertisseur';
  amountEuro:number;
  rateEuroDollar:number;
  amountDollar:number;
  euroToDollar:boolean;
  rateEuroDollarCustom:number;
  rateEuroDollarReal:number;
  
  ngOnInit(): void {
    this.amountEuro = 1.1;
    this.rateEuroDollarReal = 1.19;
    this.rateEuroDollar = this.rateEuroDollarReal;
    this.rateEuroDollarCustom = this.rateEuroDollar;
    this.euroToDollar = true;
    this.amountDollar = this.amountEuro*this.rateEuroDollar;
  }

  convert() {
    if(this.euroToDollar) {
      this.amountDollar = this.amountEuro*this.rateEuroDollar;
    } else {
      this.amountEuro = this.amountDollar / this.rateEuroDollar;
    }
  }

  changeRate() {
    let variation = ((this.rateEuroDollarReal - this.rateEuroDollarCustom) / this.rateEuroDollarCustom) * 100;
    if(Math.abs(variation) > 2) {
      this.rateEuroDollar = this.rateEuroDollarReal;
    } else {
      this.rateEuroDollar = this.rateEuroDollarCustom;
    }
  }
 }
