import Link from "next/link"
import React from "react"

const jordans = () => {
  return (
    <div className="relative bg-white w-full h-[665px] overflow-hidden text-left text-[32px] text-black font-work-sans">
      <main className="absolute top-[0px] left-[0px] w-[390px] h-[665px]">
        <img
          className="absolute top-[0px] left-[0px] w-[390px] h-[665px] object-cover"
          alt=""
          src="../screenshot-20230216-at-1221-1@2x.png"
        />
      </main>
      <div className="absolute top-[56px] left-[21px] w-[348px] h-[605px]">
        <div className="absolute top-[0px] left-[0px] w-[348px] h-[597px]">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[348px] h-[597px] border-[3px] border-solid border-black" />
        </div>
        <img
          className="absolute top-[24px] left-[93px] w-[162.73px] h-[179px]"
          alt=""
          src="../stamp.svg"
        />
        <div className="absolute top-[219px] left-[23px] w-[222px] h-32">
          <b className="absolute top-[0px] left-[0px] tracking-[0.2px] leading-[32px] flex text-center items-center justify-center w-[228px] h-[49px] text-[32px]">
            AIR JORDANS
          </b>
          <div className="absolute top-[53px] left-[0px] text-[16px] tracking-[0.2px] leading-[20px] flex items-center w-[222px] h-[41px]">
            Stand a chance to win the new AIR JORDANS for free!
          </div>
          <div className="absolute top-[102px] left-[0px]  tracking-[0.2px] leading-[24px] text-gray-200 flex items-center w-[207px] h-[26px] text-[12px]">
            Location : United Center, Chicago
          </div>
        </div>
        <div className="absolute top-[504px] left-[23px] w-[302px] h-[26px] text-2xl text-orangered">
          <b className="absolute top-[0px] left-[263px] tracking-[0.2px] leading-[16px] flex items-center w-[39px] h-6 text-[24px]">
            1/5
          </b>
          <div className="absolute top-[0px] left-[0px] tracking-[0.2px] leading-[24px] text-gray-200 flex items-center w-[207px] h-[26px] text-[12px]">
            Floor price : $100
          </div>
        </div>
        <div className="absolute top-[363px] left-[23px] w-[302px] h-[133px] text-gray-200">
          <div className="absolute top-[67px] left-[45px] tracking-[0.2px] leading-[14px] flex items-center w-[81px] h-[45px] text-[12px]">
            Win the newest Air Jordans
          </div>
          <div className="absolute top-[67px] left-[177px] tracking-[0.2px] leading-[14px] flex items-center w-20 h-[45px] text-[12px]">
            Free ticket to the next NBA game
          </div>
          <img
            className="absolute top-[0px] left-[0px] rounded-md w-[302px] h-[133px]"
            alt=""
            src="../rectangle-377.svg"
          />
          <img className="absolute top-[23px] left-[192px] w-8 h-8" alt="" src="../frame-73.svg" />
          <img
            className="absolute h-[24.06%] w-[10.6%] top-[17.29%] right-[68.21%] bottom-[58.65%] left-[21.19%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../fireworks.svg"
          />
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-gray-100 absolute top-[607px] left-[21px] rounded-lg w-[348px] h-[46px]">
        <div className="absolute top-[15px] tracking-[0.6px] leading-[16px] font-medium font-work-sans text-white text-center w-full text-center text-[16px]">
          <Link href={{ pathname: "/WordPuzzle", query: { hunt: "jordans" } }}>Let’s play</Link>
        </div>
      </button>
      <Link href="/">
        <img className="absolute top-[14px] left-[21px] w-5 h-5" alt="" src="../back-icon.svg" />
      </Link>
    </div>
  )
}

export default jordans
