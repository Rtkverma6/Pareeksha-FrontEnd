export class Choice {
    choice:String;
    isCorrect:boolean;
   
    constructor(data:any) {
        data = data || {};
        this.choice = data.choice;
        this.isCorrect = data.isCorrect;

    }
}