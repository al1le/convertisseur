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
  
  ngOnInit(): void {
    this.amountEuro = 1.1;
    this.rateEuroDollar = 1.19;
    this.euroToDollar = true;
    this.amountDollar = this.amountEuro*this.rateEuroDollar;
  }

  convert() {
    if(this.euroToDollar) {
      this.amountDollar = this.amountEuro*this.rateEuroDollar;
    } else {
      this.amountDollar = this.amountEuro / this.rateEuroDollar;
    }
  }
 }
