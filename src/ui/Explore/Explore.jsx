import React from "react"
import Link from "next/link"
import HamMenu from "../../components/HamMenu"

const Explore = () => {
  return (
    <div>
      <main
        id="1"
        className="relative bg-white w-full h-[665px] overflow-hidden text-left text-base text-black font-work-sans"
      >
        <HamMenu />
        <div className="absolute top-[0px] left-[0px] w-[390px] h-[665px]">
          <img
            className="absolute top-[0px] left-[0px] w-[390px] h-[665px] object-cover"
            alt=""
            src="../background-image@2x.png"
          />
          <div className="absolute top-[0px] left-[0px] bg-goldenrod w-[390px] h-[60px]"></div>
          <div className="absolute text-[28px] top-[8px] left-[19px] tracking-[0.2px] leading-[32px] flex items-center w-[168px] h-[49px]">
            EXPLORE..
          </div>
        </div>
        <div className="absolute top-[256px] left-[19px] w-[352px] h-[206px]">
          <div className="absolute top-[0px] left-[0px] w-[352px] h-44">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[352px] h-44 border-[2px] border-solid border-black" />
          </div>
          <div className="absolute top-[23px] left-[154px] w-[168px] h-[117px]">
            <b className="absolute top-[0px] left-[0px] text-[24px] tracking-[0.2px] leading-[24px] flex items-center w-[168px] h-7">
              find MICKEY!
            </b>
            <div className="absolute top-[70px]  text-[12px] left-[0px] tracking-[0.2px] leading-[24px] text-gray-200 flex items-center w-[136px] h-[26px]">
              Disneyland Park, Paris
            </div>
            <div className="absolute top-[26px] left-[0px] text-[12px] tracking-[0.2px] leading-[16px] flex items-center w-[168px] h-[41px]">
              Solve the clues to win free goodies at your loved spot
            </div>
            <b className="absolute top-[93px]  text-[16px] left-[0px] text-lg tracking-[0.2px] leading-[16px] flex text-orangered items-center w-[31px] h-6">
              1/5
            </b>
          </div>
          <img
            className="absolute top-[23px] left-[22px] w-[110px] h-[121px]"
            alt=""
            src="../frame-81.svg"
          />
        </div>
        <a href="#2">
          <img
            className="absolute top-[581px] left-[177px] w-9 h-9"
            alt=""
            src="../down-icon.svg"
          />
        </a>
        <button className="cursor-pointer [border:none] p-0 bg-gray-100 absolute top-[414px] left-[19px] rounded-lg w-[352px] h-12">
          <div className="absolute top-[16px] text-center text-[16px] w-full tracking-[0.6px] leading-[16px] font-medium font-work-sans text-white text-left">
            <Link href="/hunts/mickey">Start the hunt</Link>
          </div>
        </button>
      </main>
      <main
        id="2"
        className="relative bg-white w-full h-[665px] overflow-hidden text-left text-base text-black font-work-sans"
      >
        <div className="absolute top-[0px] left-[0px] w-[390px] h-[665px]">
          <img
            className="absolute top-[0px] left-[0px] w-[390px] h-[665px] object-cover"
            alt=""
            src="../screenshot-20230216-at-1212-1@2x.png"
          />
        </div>
        <div className="absolute top-[256px] left-[19px] w-[352px] h-[206px]">
          <div className="absolute top-[0px] left-[0px] w-[352px] h-44">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[352px] h-44 border-[2px] border-solid border-black" />
          </div>
          <div className="absolute top-[23px] left-[154px] w-[168px] h-[117px]">
            <b className="absolute top-[0px] left-[0px] text-[24px] tracking-[0.2px] leading-[24px] flex items-center w-[168px] h-7">
              AIR JORDANS
            </b>
            <div className="absolute top-[70px]  text-[12px] left-[0px] tracking-[0.2px] leading-[24px] text-gray-200 flex items-center w-[110px] h-[26px]">
              Eiffel Tower, Paris
            </div>
            <div className="absolute top-[26px] left-[0px] text-[12px] tracking-[0.2px] leading-[16px] flex items-center w-[168px] h-[41px]">
              Stand a chance to win the new AIR JORDANS for free!
            </div>
            <b className="absolute top-[93px]  text-[16px] left-[0px] text-lg tracking-[0.2px] leading-[16px] flex text-orangered items-center w-[31px] h-6">
              3/5
            </b>
          </div>
          <img
            className="absolute top-[23px] left-[22px] w-[110px] h-[121px]"
            alt=""
            src="../stamp.svg"
          />
        </div>
        <a href="#1">
          <img
            className="absolute top-[581px] left-[177px] w-9 h-9"
            alt=""
            src="../down-icon.svg"
          />
        </a>

        <button className="cursor-pointer [border:none] p-0 bg-gray-100 absolute top-[414px] left-[19px] rounded-lg w-[352px] h-12">
          <div className="absolute top-[16px] text-center text-[16px] w-full tracking-[0.6px] leading-[16px] font-medium font-work-sans text-white text-left">
            <Link href="/hunts/jordans">Start the hunt</Link>
          </div>
        </button>
      </main>
    </div>
  )
}

export default Explore
