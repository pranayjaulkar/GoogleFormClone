import { Button } from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

export default function FileUpload({ componentCss }: { componentCss: string }) {
  return (
    <div className={`${componentCss}`}>
      <div className="pb-4">
        <div className="text-[12pt] font-['Roboto',sans-serif]">
          <span>File Upload</span>
          <span className="text-red-500"> *</span>
        </div>
      </div>
      <div>
        <label className="flex items-center justify-evenly w-28 h-10 border-[1px] border-[#acacac] rounded-lg cursor-pointer hover:bg-slate-100 relative">
          <input type="file" className="invisible" />
          <div className="absolute w-full flex items-center justify-evenly">
            <div>
              <FileUploadOutlinedIcon className="text-[#43aaff]" />
            </div>
            <div>
              <span className="text-[#43aaff]">Add File</span>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}
