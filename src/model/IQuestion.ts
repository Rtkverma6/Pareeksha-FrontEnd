import { IChoice } from "./IChoice";

export interface IQuestion {
    paperId:any
    question: String;
    points:Number;
    choices: IChoice[];
  }
