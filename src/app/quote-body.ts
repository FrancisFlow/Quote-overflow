export class QuoteBody {
//   showDescription: boolean;
 constructor (
    public quote: string,
    public author: string,
    public personSubmitting:string,
    public madeDate: Date,
    public upVote: number,
    public downVote: number
 )
 {
   //  this.showDescription = false;
 }
}
    
