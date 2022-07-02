import { IChoiceGroupProps } from "@fluentui/react";
import React from "react";

type Question = {
    question: string;
    options: IChoiceGroupProps[]
}

interface QuizProps {
    questions: Question[]
}

const Quiz: React.FC<QuizProps> = () => {
    return (
        <h1>Quiz</h1>
    )
}

export default Quiz;