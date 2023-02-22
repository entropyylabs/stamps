import type { NextPage } from "next"

const Sell: NextPage = () => {
  return (
    <div className="relative bg-goldenrod w-full h-[1304px] overflow-hidden text-center text-xl text-white font-work-sans">
      <div className="absolute top-[50px] left-[21px] w-[302px] h-12 text-left text-4xl text-black">
        <p className="m-0 absolute top-[0px] left-[0px] tracking-[0.2px] leading-[32px] flex items-center w-[302px] h-12">{`EXPLORE STAMPS `}</p>
      </div>
      <div className="absolute top-[122px] left-[20px] w-[349px] h-[264px]">
        <div className="absolute top-[0px] left-[1px] rounded-lg bg-white box-border w-[348px] h-[239px] border-[2px] border-solid border-black" />
        <img
          className="absolute top-[39px] left-[110px] w-[129.09px] h-[142px]"
          alt=""
          src="../group-7049.svg"
        />
        <div className="absolute top-[216px] left-[0px] rounded-lg bg-mediumblue w-[348px] h-12">
          <div className="absolute top-[15px] left-[124px] tracking-[0.6px] leading-[16px] font-medium">
            Place a bid
          </div>
        </div>
      </div>
      <div className="absolute top-[413px] left-[20px] w-[349px] h-[264px]">
        <div className="absolute top-[0px] left-[1px] rounded-lg bg-white box-border w-[348px] h-[239px] border-[2px] border-solid border-black" />
        <img
          className="absolute top-[36px] left-[110px] w-[129px] h-[142px]"
          alt=""
          src="../group-7041.svg"
        />
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-mediumblue absolute top-[629px] left-[20px] rounded-lg w-[348px] h-12">
        <div className="absolute top-[15px] left-[124px] text-xl tracking-[0.6px] leading-[16px] font-medium font-work-sans text-white text-center">
          Place a bid
        </div>
      </button>
      <div className="absolute top-[704px] left-[21px] w-[348px] h-[264px]">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[348px] h-[239px] border-[2px] border-solid border-black" />
        <img
          className="absolute top-[39px] left-[109px] w-[129px] h-[142px]"
          alt=""
          src="../group-7053.svg"
        />
        <div className="absolute top-[216px] left-[0px] rounded-lg bg-mediumblue w-[348px] h-12">
          <div className="absolute top-[15px] left-[124px] tracking-[0.6px] leading-[16px] font-medium">
            Place a bid
          </div>
        </div>
      </div>
      <div className="absolute top-[995px] left-[21px] w-[348px] h-[265px]">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[348px] h-[239px] border-[2px] border-solid border-black" />
        <img
          className="absolute top-[41px] left-[110px] w-[129px] h-[142px]"
          alt=""
          src="../stamp5.svg"
        />
        <div className="absolute top-[217px] left-[0px] rounded-lg bg-mediumblue w-[348px] h-12">
          <div className="absolute top-[15px] left-[124px] tracking-[0.6px] leading-[16px] font-medium">
            Place a bid
          </div>
        </div>
      </div>
      <img className="absolute top-[14px] left-[21px] w-5 h-5" alt="" src="../back-icon.svg" />
      <img className="absolute top-[14px] left-[349px] w-5 h-5" alt="" src="../menu.svg" />
    </div>
  )
}

export default Sell
