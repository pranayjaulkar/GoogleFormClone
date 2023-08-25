import { formState } from "@/types";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useState } from "react";
type Props = {
  componentCss: string;
  form: formState;
  setForm: (state: any) => void;
};
export default function Component({ componentCss, form, setForm }: Props) {
  const [checkbox, setCheckbox] = useState(form.Checkbox);
  const utilCss = {
    "& span": {
      fontSize: "11pt",
    },
  };

  return (
    <div className={`${componentCss}`}>
      <div className="pb-4">
        <div className="text-[12pt] font-['Roboto',sans-serif]">
          <span>Checkbox</span>
          <span className="text-red-500"> *</span>
        </div>
      </div>

      <FormGroup>
        {checkbox.options.map((option) => (
          <FormControlLabel
            key={option}
            control={<Checkbox />}
            sx={utilCss}
            label="Option 1"
          />
        ))}
      </FormGroup>
    </div>
  );
}
