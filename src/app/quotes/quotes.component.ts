import { Component, OnInit } from '@angular/core';

import { QuoteBody } from '../quote-body';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: QuoteBody [] = [
    {quote:'Only the disciplined are free', author:'Henry Ngige', personSubmitting:'Francis Ngigi'},
    {quote:'I think, therefore I am', author:'Rene Descartes', personSubmitting:'Daniel Oluma'},
    {quote:'Only the disciplined are free', author:'Henry Ngige', personSubmitting:'David'},
    {quote:'Only the disciplined are free', author:'Henry Ngige', personSubmitting:'Anonymous'},
    {quote:'We suffer more in imagination that in reality', author:'Francis Ngigi', personSubmitting:'Anonymous'},
    {quote:'Discipline breeds discipline', author:'Anonymous', personSubmitting:'Francis Ngigi'},
    
  ]
  
  constructor(
   

  ) {

  
  }

  ngOnInit(): void {
  }

}
