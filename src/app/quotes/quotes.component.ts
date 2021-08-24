import { Component, OnInit } from '@angular/core';

import { QuoteBody } from '../quote-body';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: QuoteBody [] = [
    {quote:'Only the disciplined are free', author:'Henry Ngige', personSubmitting:'Francis Ngigi', madeDate: new Date(2021, 3, 4)},
    {quote:'I think, therefore I am', author:'Rene Descartes', personSubmitting:'Daniel Oluma', madeDate: new Date(2021, 3, 4)},
    {quote:'Only the disciplined are free', author:'Henry Ngige', personSubmitting:'David', madeDate: new Date(2021, 3, 4)},
    {quote:'Only the disciplined are free', author:'Henry Ngige', personSubmitting:'Anonymous', madeDate: new Date(2021, 3, 4)},
    {quote:'We suffer more in imagination that in reality', author:'Francis Ngigi', personSubmitting:'Anonymous', madeDate: new Date(2021, 3, 4)},
    {quote:'Discipline breeds discipline', author:'Anonymous', personSubmitting:'Francis Ngigi', madeDate: new Date(2021, 3, 4)},
    
  ]
  
  
  constructor(
   

  ) {

  
  }

  ngOnInit(): void {
  }

}
