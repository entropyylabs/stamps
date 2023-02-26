import Link from "next/link"
import React from "react"

const passport = () => {
  return (
    <div className="relative bg-white w-full h-[665px] overflow-hidden text-center text-4xl text-black font-work-sans">
      <div className="absolute top-[64px] left-[80px] w-[233px] h-12">
        <div className="absolute text-[32px] top-[0px] left-[0px] tracking-[0.2px] leading-[32px] flex items-center justify-center w-[233px] h-12">
          YOUR STAMPS
        </div>
      </div>
      <Link href="/myPassport">
        <img
          className="absolute top-[134px] left-[54px] w-[286px] h-[397.98px]"
          alt=""
          src="../passport.svg"
        />
      </Link>
    </div>
  )
}

export default passport
