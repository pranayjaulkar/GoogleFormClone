export type formState = {
  MCQ: {
    options: string[];
    response: { selected: string };
  };
  Checkbox: {
    options: string[];
    response: { selected: string[] };
  };
  ShortAnswer: {};
  Paragraph: {};
  DropDown: {};
  FileUpload: {};
  LinearScale: {};
  MultiChoiceGrid: {};
  tickBoxGrid: {};
};
