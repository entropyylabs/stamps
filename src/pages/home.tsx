import type { NextPage } from "next"

const Hunts1: NextPage = () => {
  return (
    <main className="relative bg-white w-full h-[665px] overflow-hidden text-left text-4xl text-gray-100 font-work-sans">
      <div className="absolute top-[0px] left-[0px] w-[390px] h-[665px]">
        <img
          className="absolute top-[0px] left-[0px] w-[390px] h-[665px] object-cover"
          alt=""
          src="../screenshot-20230216-at-1212-1@2x.png"
        />
        <div className="absolute top-[36px] left-[0px] bg-goldenrod w-[390px] h-[52px]" />
        <div className="absolute top-[37px] left-[27px] tracking-[0.2px] leading-[32px] flex items-center w-[168px] h-[49px]">
          EXPLORE..
        </div>
      </div>
      <div className="absolute top-[256px] left-[19px] w-[352px] h-[206px] text-base text-black">
        <div className="absolute top-[0px] left-[0px] w-[352px] h-44">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[352px] h-44 border-[2px] border-solid border-black" />
        </div>
        <div className="absolute top-[23px] left-[154px] w-[168px] h-[117px]">
          <b className="absolute top-[0px] left-[0px] text-3xl tracking-[0.2px] leading-[24px] flex items-center w-[168px] h-7">
            AIR JORDANS
          </b>
          <div className="absolute top-[70px] left-[0px] tracking-[0.2px] leading-[24px] text-gray-300 flex items-center w-[110px] h-[26px]">
            Eiffel Tower, Paris
          </div>
          <div className="absolute top-[26px] left-[0px] tracking-[0.2px] leading-[16px] flex items-center w-[168px] h-[41px]">
            Stand a chance to win the new AIR JORDANS for free!
          </div>
          <b className="absolute top-[93px] left-[0px] text-xl tracking-[0.2px] leading-[16px] flex text-orangered items-center w-[31px] h-6">
            3/5
          </b>
        </div>
        <img
          className="absolute top-[23px] left-[22px] w-[110px] h-[121px]"
          alt=""
          src="../stamp2.svg"
        />
      </div>
      <img className="absolute top-[581px] left-[177px] w-9 h-9" alt="" src="../down-icon2.svg" />
      <button className="cursor-pointer [border:none] p-0 bg-gray-100 absolute top-[414px] left-[19px] rounded-lg w-[352px] h-12">
        <div className="absolute top-[16px] left-[116px] text-xl tracking-[0.6px] leading-[16px] font-medium font-work-sans text-white text-left">
          Start the hunt
        </div>
      </button>
    </main>
  )
}

export default Hunts1
