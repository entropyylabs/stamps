import React from "react"
import { flippage } from "../utils/pageConfig"

const FlipPage = ({ index }) => {
  return (
    <main className="absolute top-[0px] left-[0px] w-[348px] h-[458px] text-left text-base text-orangered font-work-sans">
      <div className="absolute top-[0px] left-[0px] w-[348px] h-[458px]">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[348px] h-[458px] border-[3px] border-solid border-black" />
      </div>
      <div className="absolute top-[198px] left-[23px] w-full h-[71px]">
        <b className="absolute top-[0px] left-[0px] text-[32px] tracking-[0.2px] leading-[32px] flex text-black text-center items-center justify-center  h-[49px]">
          {flippage[index].huntName}
        </b>
        <b className="absolute top-[49px]  left-[0px] text-[12px] tracking-[0.2px] leading-[20px] flex items-center w-[195px] h-[22px]">
          EXPIRES : {flippage[index].huntExpiry}
        </b>
      </div>
      <div className="absolute top-[275px] left-[23px] w-[303px] h-[159px] text-gray-300">
        <div className="absolute text-[12px] top-[93px] text-black opacity-50 left-[36px] tracking-[0.2px] leading-[14px] flex  w-[81px] h-[45px]">
          {flippage[index].huntUtility1}
        </div>
        <div className="absolute text-[12px] text-black opacity-50 top-[93px] left-[168px] tracking-[0.2px] leading-[14px] flex min-w-[81px] max-w-[113px] h-[45px]">
          {flippage[index].huntUtility2}
        </div>
        <img
          className="absolute top-[26px] left-[0px] rounded-md w-[302px] h-[133px]"
          alt=""
          src="../rectangle-377.svg"
        />
        <img
          className="absolute h-[20.13%] w-[10.56%]  w-[10.56%] top-[30.82%] right-[33.99%] left-[55.45%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={flippage[index].huntUtility1Icon}
        />
        <img
          className="absolute h-[20.13%] w-[10.56%] top-[30.82%] right-[77.56%] bottom-[49.06%] left-[11.88%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={flippage[index].huntUtility2Icon}
        />
        <div className="absolute top-[2px] left-[0px] tracking-[0.2px] leading-[20px] font-medium text-gray-400 flex items-center w-[65px] h-[22px] text-[12px]">
          UTILITY :
        </div>
      </div>
      <img
        className="animate-pulse absolute top-[15px] left-[93px] w-[162.73px] h-[179px]"
        alt=""
        src={flippage[index].huntImage}
      />
    </main>
  )
}

export default FlipPage
