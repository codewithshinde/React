import { IChoiceGroupOption } from "@fluentui/react";

export type Question = {
  questionId: string;
  title: string;
  options: IChoiceGroupOption[];
};

export interface QuizProps {
  questions: Question[];
}
