import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import {useEffect, useState } from "react";
import { formState } from "@/types";

type Props = {
  componentCss: string;
  form: formState;
  setForm: (state: any) => void;
};

export default function MCQ({ componentCss, form, setForm }: Props) {
  console.log('form: ', form);
  const utilCss = {
    "& span": {
      fontSize: "11pt",
    },
  };
  const [MCQ, setMCQ] = useState(form.MCQ);
  const handleOnClick = (option: string) => {
    setMCQ({ ...MCQ, response: { selected: option } });
  };
  useEffect(() => {
    setForm({ ...form, MCQ });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [MCQ]);
  return (
    <div className={componentCss}>
      <div className="pb-4">
        <div className="text-[12pt] font-['Roboto',sans-serif]">
          <span>MCQ</span>
          <span className="text-red-500"> *</span>
        </div>
      </div>

      <FormControl>
        <RadioGroup name="mcq">
          {form.MCQ.options.map((option) => (
            <FormControlLabel
              key={option}
              sx={utilCss}
              value={option}
              control={<Radio onClick={() => handleOnClick(option)} />}
              label={option}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}
