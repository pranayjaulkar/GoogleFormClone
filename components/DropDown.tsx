import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function MCQ({ componentCss }: { componentCss: string }) {
  return (
    <div className={`${componentCss}`}>
      <div className="pb-4">
        <div className="text-[12pt] font-['Roboto',sans-serif]">
          <span>Drop Down</span>
          <span className="text-red-500"> *</span>
        </div>
      </div>

      <FormControl className="w-32" size="small">
        <InputLabel id="demo-simple-select-label">Choose</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="Age"
          // onChange={handleChange}
        >
          <MenuItem value={10}>Option 1</MenuItem>
          <MenuItem value={20}>Option 2</MenuItem>
          <MenuItem value={30}>Option 3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
