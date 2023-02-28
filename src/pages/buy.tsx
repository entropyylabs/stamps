import type { NextPage } from "next"
import HamMenu from "../components/HamMenu"
import BackIcon from "../components/BackIcon"
import Link from "next/link"

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
          <Link href="/bid/nike">
            <div className="absolute top-[15px] left-[124px] tracking-[0.6px] leading-[16px] font-medium">
              Place a bid
            </div>
          </Link>
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
        <Link href="/bid/mcd">
          <div className="absolute top-[15px] left-[124px] text-xl tracking-[0.6px] leading-[16px] font-medium font-work-sans text-white text-center">
            Place a bid
          </div>
        </Link>
      </button>
      <div className="absolute top-[704px] left-[21px] w-[348px] h-[264px]">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[348px] h-[239px] border-[2px] border-solid border-black" />
        <img
          className="absolute top-[39px] left-[109px] w-[129px] h-[142px]"
          alt=""
          src="../group-7053.svg"
        />
        <div className="absolute top-[216px] left-[0px] rounded-lg bg-mediumblue w-[348px] h-12">
          <Link href="/bid/starbucks">
            <div className="absolute top-[15px] left-[124px] tracking-[0.6px] leading-[16px] font-medium">
              Place a bid
            </div>
          </Link>
        </div>
      </div>
      <div className="absolute top-[995px] left-[21px] w-[348px] h-[265px]">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[348px] h-[239px] border-[2px] border-solid border-black" />
        <img
          className="absolute top-[41px] left-[110px] w-[129px] h-[142px]"
          alt=""
          src="../hmstamp.svg"
        />
        <div className="absolute top-[217px] left-[0px] rounded-lg bg-mediumblue w-[348px] h-12">
          <Link href="/bid/hm">
            <div className="absolute top-[15px] left-[124px] tracking-[0.6px] leading-[16px] font-medium">
              Place a bid
            </div>
          </Link>
        </div>
      </div>
      <HamMenu />
      <BackIcon to="/" />
    </div>
  )
}

export default Sell
