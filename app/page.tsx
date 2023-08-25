import Image from "next/image";
import Questions from "@/components/Questions";
import { Button } from "@mui/material";

export default function Home() {
  const borderColor = "#dadce0";
  const fontCss = "font-['Roboto',sans-serif] text-sm text-[#5f6368]";

  return (
    <main className="mx-auto w-[640px] max-w-[90vw]">
      <form action="" className="w-full">
        <div
          className={`w-full border border-solid border-[${borderColor}] rounded-[8px] px-[24px] pt-[22px] pb-[16px] my-[12px] overflow-hidden bg-white`}
        >
          <div className="pb-3">
            <span className="text-[24pt]">Assignment Task</span>
          </div>

          <div className="relative">
            <div>
              <div
                className={`w-[900px] h-[10px] bg-[#673ab7] absolute right-[-2rem] top-[-82px]`}
              ></div>
            </div>
          </div>
          <div className="relative">
            <div>
              <div
                className={`w-[900px] absolute border-t-[1px] border-solid border-[${borderColor}] right-[-2rem]`}
              ></div>
            </div>
          </div>

          <div>
            <div className={`text-[14px] flex items-center justify-between `}>
              <div className="mt-3 mb-2">
                <span className={`${fontCss} font-bold`}>
                  pranaypj13@gmail.com
                </span>
                <a href="#" className="text-[#1a73e8] ml-2">
                  Switch account
                </a>
              </div>
              <div>
                <svg className="w-[24px] h-[20px] ">
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#5f6368"
                    d="M10.35 17 16 11.35 14.55 9.9l-4.225 4.225-2.1-2.1L6.8 13.45ZM6.5 20q-2.275                           0-3.887-1.575Q1 16.85 1 14.575q0-1.95 1.175-3.475Q3.35 9.575 5.25                           9.15q.625-2.3 2.5-3.725Q9.625 4 12 4q2.925 0 4.962 2.037Q19 8.075 19                           11q1.725.2 2.863 1.487Q23 13.775 23 15.5q0 1.875-1.312 3.188Q20.375 20                           18.5 20Zm0-2h12q1.05 0 1.775-.725Q21 16.55 21 15.5q0-1.05-.725-1.775Q19.55                           13 18.5 13H17v-2q0-2.075-1.462-3.538Q14.075 6 12 6 9.925 6 8.463 7.462 7                           8.925 7 11h-.5q-1.45 0-2.475 1.025Q3 13.05 3 14.5q0 1.45 1.025 2.475Q5.05                           18 6.5 18Zm5.5-6Z"
                  />
                </svg>
              </div>
            </div>
            <p className={`mt-3 mb-3 ${fontCss} font-normal`}>
              The name and photo associated with your Google account will be
              recorded when you upload files and submit this form. Your email is
              not part of your response.
            </p>
            <div className="relative">
              <div>
                <div
                  className={`w-[900px] absolute border-t-[1px] border-solid border-[${borderColor}] right-[-2rem]`}
                ></div>
              </div>
            </div>
            <div className={`text-red-500 pt-3 ${fontCss}`}>
              <span>* Indicates required question</span>
            </div>
          </div>
        </div>

        <Questions />

        <div>
          <div className="flex justify-between items-center">
            <div>
              <Button
                sx={{ textTransform: "none" }}
                className="bg-[#673ab7] px-6 hover:bg-[#7242c5] font-medium"
                variant="contained"
              >
                Submit
              </Button>
            </div>
            <div className="flex items-center space-x-4">
              <span className="w-48 h-[10px] bg-[#34a853] rounded-lg"></span>
              <span className="text-[14px]">Page 1 of 1</span>
            </div>
            <div>
              <Button
                className="font-medium"
                sx={{ textTransform: "none", color: "#673ab7" }}
                variant="text"
              >
                Clear form
              </Button>
            </div>
          </div>
        </div>
      </form>
      <div>
        <div className="text-[12px] my-4 flex justify-center items-center">
          This content is neither created nor endorsed by Google.
          <a href="#" target="_blank">
            Report Abuse
          </a>
          <a href="https://policies.google.com/terms" target="_blank">
            Terms of Service
          </a>
          <a href="https://policies.google.com/privacy" target="_blank">
            Privacy Policy
          </a>
        </div>
        <div className="w-full my-6 flex justify-center items-center">
          <a
            className="flex items-center"
            href="//www.google.com/forms/about/?utm_source=product&amp;utm_medium=forms_logo&amp;utm_campaign=forms"
          >
            <Image
              src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_dark_clr_74x24px.svg"
              alt="Google"
              height={24}
              width={74}
            />
            &nbsp;<span>Forms</span>
          </a>
        </div>
      </div>
    </main>
  );
}
