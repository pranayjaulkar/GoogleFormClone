"use client";
import Checkbox from "@/components/Checkbox";
import LinearScale from "@/components/LinearScale";
import TickBoxGrid from "@/components/TickBoxGrid";
import ShortAnswer from "@/components/ShortAnswer";
import DropDown from "@/components/DropDown";
import MCQ from "@/components/MCQ";
import MultiChoiceGrid from "@/components/MultiChoiceGrid";
import Paragraph from "@/components/Paragraph";
import FileUpload from "@/components/FileUpload";
import { useState } from "react";

export default function Component() {
  const componentCss =
    "w-full border border-solid border-[#dadce0] rounded-[8px] p-6 mb-[12px] overflow-hidden bg-white";

  const initState = {
    MCQ: {
      options: ["Option 1", "Option 2", "Option 3"],
      response: { selected: "" },
    },
    Checkbox: {
      options: ["Option 1", "Option 2", "Option 3"],
      response: { selected: [] },
    },
    ShortAnswer: { response: { ans: "" } },
    Paragraph: { response: { ans: "" } },
    DropDown: { response: { selected: "" } },
    FileUpload: { response: { selectedFile: "" } },
    LinearScale: {},
    MultiChoiceGrid: {},
    tickBoxGrid: {},
  };

  const [form, setForm] = useState(initState);
  return (
    <>
      {/* MCQ */}
      <MCQ componentCss={componentCss} form={form} setForm={setForm} />

      {/* Checkbox */}
      <Checkbox componentCss={componentCss} form={form} setForm={setForm} />

      {/* Short Answer */}
      <ShortAnswer componentCss={componentCss} />

      {/* Paragraph */}
      <Paragraph componentCss={componentCss} />

      {/* Drop down */}
      <DropDown componentCss={componentCss} />

      {/* File Upload */}
      <FileUpload componentCss={componentCss} />

      {/* linear scale */}
      <LinearScale componentCss={componentCss} />

      {/* Multi choice grid */}
      <MultiChoiceGrid componentCss={componentCss} />

      {/* Tick box grid */}
      <TickBoxGrid componentCss={componentCss} />
    </>
  );
}
