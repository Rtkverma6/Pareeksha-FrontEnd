import { IChoice } from "./IChoice";
export interface IQuestionResponse {
    questionId;
    question: String;
    choices : IChoice[];
} 