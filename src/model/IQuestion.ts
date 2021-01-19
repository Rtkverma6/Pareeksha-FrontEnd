<<<<<<< HEAD
import { IChoice } from "./IChoice";

export interface IQuestion {
    paperId : any,
    question: String;
    points:Number;
    choices : Array<IChoice> ;
  }
=======
import { IChoice } from "./IChoice";

export interface IQuestion {
    paperId:number
    question: String;
    points:Number;
    choices: IChoice[];
  }
>>>>>>> f16aeaa288b566a2444f0594885cc17b3fde7488
