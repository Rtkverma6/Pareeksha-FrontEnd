import { IQuestion } from "./IQuestion";

export interface IPaper{
    paperName: String,
    paperSubject : String,
    questions : Array<IQuestion>
}