import React, { useState } from "react"
import HamMenu from "../../components/HamMenu"
import Link from "next/link"
import Sheet from "react-modal-sheet"

const mcd = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className="relative bg-white w-full h-[665px] overflow-hidden text-left text-base text-orangered font-work-sans">
      <div className="absolute top-[528px] left-[107px] w-44 h-[22px] text-lg text-gray-400">
        <div className="absolute text-[14px] top-[0px] left-[0px] tracking-[0.2px] leading-[20px] flex items-center w-44 h-[22px]">
          Floor price : $75
        </div>
      </div>
      <div className="absolute top-[379px] left-[21px] w-[348px] h-[125px]">
        <img
          className="absolute top-[0px] left-[0px] w-[348px] h-[125px]"
          alt=""
          src="../group-7052.svg"
        />
        <div className="absolute text-[12px] top-[5px] left-[12px] tracking-[0.2px] leading-[20px] text-gray-400 flex items-center w-[67px] h-[22px]">
          UTILITY :
        </div>
        <div className="absolute text-[12px] top-[37px] left-[12px] [text-decoration:line-through] tracking-[0.2px] leading-[12px] flex items-center w-[142px] h-[18px]">
          Free delivery for 1 year
        </div>
        <div className="absolute text-[12px] top-[68px] left-[12px] [text-decoration:line-through] tracking-[0.2px] leading-[12px] flex items-center w-[157px] h-[18px]">
          Enjoy an exclusive menu
        </div>
        <div className="absolute text-[12px] top-[100px] left-[12px] tracking-[0.2px] leading-[12px] text-gray-100 flex items-center w-[213px] h-[18px]">
          Get 3 free meals upto $50 EUROS
        </div>
      </div>
      <img
        className="absolute top-[61px] left-[21px] w-[348px] h-[231px]"
        alt=""
        src="../mcdonalds-stamp.svg"
      />
      <div className="absolute top-[296px] left-[21px] w-[255px] h-[71px]">
        <b className="absolute top-[49px] left-[0px] tracking-[0.2px] leading-[20px] flex items-center w-[195px] h-[22px] text-[12px]">
          EXPIRES : 5th JUNE 2023
        </b>
        <b className="absolute top-[0px] left-[0px] text-[32px] tracking-[0.2px] leading-[32px] flex text-black items-center w-[246px] h-[49px]">
          MC FREEEEBIE
        </b>
      </div>
      <Link href="/buy">
        <img className="absolute top-[14px] left-[21px] w-5 h-5" alt="" src="../back-icon.svg" />
      </Link>
      <button
        onClick={() => setOpen(true)}
        className="absolute top-[558px] left-[21px] rounded-lg bg-mediumblue w-[348px] h-12 text-center text-xl text-white"
      >
        <div className="absolute top-[15px] left-[0px] text-[16px] tracking-[0.6px] leading-[16px] font-medium w-full text-center">
          Place a bid
        </div>
      </button>
      <HamMenu />
      <Sheet isOpen={isOpen} onClose={() => setOpen(false)} detent="content-height">
        <Sheet.Container style={{ border: "2px solid black" }}>
          <Sheet.Header />
          <Sheet.Content>
            <div className="relative h-[102px]">
              <p className="m-0 absolute font-[20px] top-[20px] left-[26px] tracking-[0.2px] leading-[24px] flex items-center w-[281px] h-11">
                Bid placed successfully!
              </p>
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </div>
  )
}

export default mcd
