import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";

export default function MCQ({ componentCss }: { componentCss: string }) {
    return (
        <div className={`${componentCss}`}>
        <div className="pb-4">
          <div className="text-[12pt] font-['Roboto',sans-serif]">
            <span>Linear Scale</span>
            <span className="text-red-500"> *</span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <span className="text-[11pt]">Worst</span>
          </div>
          <FormControl className="mx-8">
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value={1}
                control={<Radio />}
                label="1"
                labelPlacement="top"
              />
              <FormControlLabel
                value={2}
                control={<Radio />}
                label="2"
                labelPlacement="top"
              />
              <FormControlLabel
                value={3}
                control={<Radio />}
                label="3"
                labelPlacement="top"
              />
              <FormControlLabel
                value={4}
                control={<Radio />}
                label="4"
                labelPlacement="top"
              />
              <FormControlLabel
                value={5}
                control={<Radio />}
                label="5"
                labelPlacement="top"
              />
            </RadioGroup>
          </FormControl>
          <div>
            <span className="text-[11pt]">Best</span>
          </div>
        </div>
      </div>
    );
  }
  