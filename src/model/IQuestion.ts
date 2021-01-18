import { IChoice } from "./IChoice";

export interface IQuestion {
    paperId:number
    question: String;
    points:Number;
    choices: IChoice[];
  }
