import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { getRandomString } from 'selenium-webdriver/safari';

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
  history: any[] = [];
  subscription: Subscription;

  
  
  ngOnInit(): void {
    this.amountEuro = 1.1;
    this.rateEuroDollarReal = 1.19;
    this.rateEuroDollar = this.rateEuroDollarReal;
    this.rateEuroDollarCustom = this.rateEuroDollar;
    this.euroToDollar = true;
    this.amountDollar = this.amountEuro*this.rateEuroDollar;
    const source = interval(3000);
    this.subscription = source.subscribe(val => {
      let rand = Math.random() * 0.05;
      let positive = Math.random() > 0.5;
      rand = positive? rand : rand*-1;
      if(this.euroToDollar) {
        this.amountEuro += rand;
      } else {
        this.amountDollar += rand;
      }
      this.convert();
    })
  }


  convert() {
    if(this.euroToDollar) {
      this.amountDollar = this.amountEuro*this.rateEuroDollar;
    } else {
      this.amountEuro = this.amountDollar / this.rateEuroDollar;
    }
    let historyLine = {
      realRate: this.rateEuroDollarReal,
      rateCustom: this.rateEuroDollarCustom,
      initial: this.euroToDollar ? this.amountEuro + " €" : this.amountDollar + "$",
      calculated: this.euroToDollar ? this.amountDollar + "$" : this.amountEuro + " €"
    }
    this.history.push(historyLine);
    if(this.history.length > 5) {
      this.history.shift();
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
