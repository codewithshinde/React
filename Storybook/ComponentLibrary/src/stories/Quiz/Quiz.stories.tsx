import { ComponentStory, ComponentMeta } from "@storybook/react";
import Quiz from ".";
import { Question } from "./types";

export default {
  title: "Components/Quiz",
  component: Quiz,
} as ComponentMeta<typeof Quiz>;

const Template: ComponentStory<typeof Quiz> = (args) => (
  <Quiz questions={questions} />
);

const questions: Question[] = [
  {
    questionId: "1",
    title: "Choose the correct answer",
    options: [
      { key: "A", text: "Option A" },
      { key: "B", text: "Option B" },
      { key: "C", text: "Option C" },
      { key: "D", text: "Option D" },
    ],
  },
  {
    questionId: "2",
    title: "Choose the wrong answer",
    options: [
      { key: "A", text: "Option A" },
      { key: "B", text: "Option B" },
      { key: "C", text: "Option C", disabled: true },
      { key: "D", text: "Option D" },
    ],
  },
  {
    questionId: "3",
    title: "Choose the apt answer",
    options: [
      { key: "A", text: "Option A" },
      { key: "B", text: "Option B" },
      { key: "C", text: "Option C" },
      { key: "D", text: "Option D" },
    ],
  },
];
export const Basic = Template.bind({});
