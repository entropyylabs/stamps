import Link from "next/link"
import React from "react"
import Confetti from "react-confetti"
import { useRouter } from "next/router"

const celebration = () => {
  const router = useRouter()
  const { hunt } = router.query

  return (
    <div className="relative bg-white w-full h-[665px] overflow-hidden text-left text-[14px] text-black font-work-sans">
      <Confetti width="665" height="665" />
      <button className="cursor-pointer [border:none] p-0 bg-gray-100 absolute top-[507px] left-[102px] rounded-lg w-[186px] h-[46px]">
        <div className="absolute top-[15px] left-[0px] text-[16px] w-full h-full tracking-[0.6px] leading-[16px] font-work-sans text-white text-center align-middle">
          <Link href="/passport">View my passport</Link>
        </div>
      </button>
      <img
        className="absolute top-[123px] left-[72px] w-[246px] h-[270.6px]"
        alt=""
        src={hunt === "mickey" ? "../stamp1.svg" : "../stamp.svg"}
      />
      <div className="absolute top-[561px] left-[50px] w-[291px] h-[26px] text-gray-100">
        <p className="m-0 absolute top-[0px] w-[391px] left-[0px] leading-[20px] flex italic items-center w-[291px] h-[26px]">
          A new stamp got added to your collection!
        </p>
      </div>
      <div className="absolute top-[394px] w-full h-[49px] text-center text-3xl">
        <b className="absolute top-[0px] left-[0px] tracking-[0.2px]  w-full text-center leading-[32px] flex items-center justify-center w-[196px] h-[49px] text-[32px]">
          {hunt === "mickey" ? "find Mickey!" : "AIR JORDANS"}
        </b>
      </div>
      <div className="absolute top-[56px] left-[91px] w-52 h-[41px] text-2xl">
        <p className="m-0 absolute top-[0px] left-[0px] leading-[24px] flex items-center w-[215px] h-[41px] text-[24px]">
          YAAYY! YOU WON!
        </p>
      </div>
    </div>
  )
}

export default celebration
