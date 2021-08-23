export class QuoteBody {
 constructor (
    public quote: string,
    public author: string,
    public personSubmitting:string 
 )
 {
    this.quote = quote;
    this.author = author;
    this.personSubmitting = personSubmitting;

 }
}
    
