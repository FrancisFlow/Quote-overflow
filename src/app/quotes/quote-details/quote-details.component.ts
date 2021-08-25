import { Component, OnInit } from '@angular/core';
import { QuoteBody } from 'src/app/quote-body';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  // @Input() quotes:QuoteBody;
  constructor() { }

  ngOnInit(): void {
  }

}
