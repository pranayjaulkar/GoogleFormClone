import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";

export default function MCQ({ componentCss }: { componentCss: string }) {
    return (
        <div className={`${componentCss}`}>
        <div className="pb-4">
          <div className="text-[12pt] font-['Roboto',sans-serif]">
            <span>Multi choice Grid</span>
            <span className="text-red-500"> *</span>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-evenly">
            <div className="w-20 h-11 flex items-center justify-center">
              <span className="text-[11pt]"></span>
            </div>
            <div className="w-20 h-11 flex items-center justify-center">
              <span className="text-[11pt]">Column 1</span>
            </div>
            <div className="w-20 h-11 flex items-center justify-center">
              <span className="text-[11pt]">Column 2</span>
            </div>
            <div className="w-20 h-11 flex items-center justify-center">
              <span className="text-[11pt]">Column 3</span>
            </div>
          </div>
          <div>
            <FormControl className="w-full mb-1">
              <RadioGroup
                row
                className="justify-evenly bg-[#f8f9fa]  items-center"
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <div className="w-20">
                  <span className="text-[11pt]">Row 1</span>
                </div>
                <FormControlLabel
                  className="w-20 m-0 justify-center shrink"
                  value={1}
                  control={<Radio />}
                  label=""
                />
                <FormControlLabel
                  className="w-20 m-0 justify-center shrink"
                  value={2}
                  control={<Radio />}
                  label=""
                />
                <FormControlLabel
                  className="w-20 m-0 justify-center shrink"
                  value={3}
                  control={<Radio />}
                  label=""
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div>
            <FormControl className="w-full mb-1">
              <RadioGroup
                row
                className="justify-evenly bg-[#f8f9fa]  items-center"
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <div className="w-20">
                  <span className="text-[11pt]">Row 2</span>
                </div>
                <FormControlLabel
                  className="w-20 m-0 justify-center shrink"
                  value={1}
                  control={<Radio />}
                  label=""
                />
                <FormControlLabel
                  className="w-20 m-0 justify-center shrink"
                  value={2}
                  control={<Radio />}
                  label=""
                />
                <FormControlLabel
                  className="w-20 m-0 justify-center shrink"
                  value={3}
                  control={<Radio />}
                  label=""
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div>
            <FormControl className="w-full mb-1">
              <RadioGroup
                row
                className="justify-evenly bg-[#f8f9fa]  items-center"
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <div className="w-20">
                  <span className="text-[11pt]">Row 3</span>
                </div>
                <FormControlLabel
                  className="w-20 m-0 justify-center shrink"
                  value={1}
                  control={<Radio />}
                  label=""
                />
                <FormControlLabel
                  className="w-20 m-0 justify-center shrink"
                  value={2}
                  control={<Radio />}
                  label=""
                />
                <FormControlLabel
                  className="w-20 m-0 justify-center shrink"
                  value={3}
                  control={<Radio />}
                  label=""
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      </div>
    );
  }
  