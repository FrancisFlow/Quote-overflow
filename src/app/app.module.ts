import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadsectionComponent } from './headsection/headsection.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteHighlighterDirective } from './quote-highlighter.directive';
import { QuoteDetailsComponent } from './quotes/quote-details/quote-details.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeadsectionComponent,
    QuotesComponent,
    QuoteHighlighterDirective,
    QuoteDetailsComponent,
    QuoteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
