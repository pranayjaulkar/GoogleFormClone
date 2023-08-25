import { TextField } from "@mui/material";

export default function MCQ({ componentCss }: { componentCss: string }) {
  return (
    <div className={`${componentCss}`}>
      <div className="pb-4">
        <div className="text-[12pt] font-['Roboto',sans-serif]">
          <span>Paragraph</span>
          <span className="text-red-500"> *</span>
        </div>
      </div>

      <TextField
        sx={{
          width: "100%",
          "& label,input": {
            fontSize: "14px",
          },
        }}
        label="Your Answer"
        variant="standard"
      />
    </div>
  );
}
