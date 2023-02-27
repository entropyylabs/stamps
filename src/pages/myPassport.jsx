import { Switch } from "@chakra-ui/react"
import React, { useState } from "react"
import { FlippingPages } from "flipping-pages"
import "flipping-pages/dist/style.css"
import Link from "next/link"
import Sheet from "react-modal-sheet"
import FlipPage from "../components/FlipPage"
import { flippage } from "../utils/pageConfig"
import HamMenu from "../components/HamMenu"

const myPassport = () => {
  const [selected, setSelected] = useState(0)

  const [isOpen, setOpen] = useState(false)

  const handleSwitch = () => {
    setOpen(true)
  }

  const back = () => {
    setSelected((selected) => Math.max(selected - 1, 0))
  }

  const next = () => {
    setSelected((selected) => Math.min(selected + 1, 2))
  }
  return (
    <div className="relative bg-goldenrod w-full h-[665px] overflow-hidden cursor-pointer text-left text-lg text-black font-work-sans">
      <HamMenu />
      <Sheet isOpen={isOpen} onClose={() => setOpen(false)} detent="content-height">
        <Sheet.Container style={{ border: "2px solid black" }}>
          <Sheet.Header />
          <Sheet.Content>
            <div className="relative h-[172px]">
              <div className="absolute top-[110px] left-[205px] w-28 h-10">
                <button
                  className="cursor-pointer [border:none] p-0 bg-gray-100 absolute top-[0px] left-[0px] rounded-lg w-28 h-10"
                  onClick={() => setOpen(false)}
                >
                  <div className="absolute top-[12px] left-[43px] w-[27px] h-4">
                    <div className="absolute top-[0px] left-[0px] text-xl tracking-[0.6px] leading-[16px] font-work-sans text-white text-center">
                      Yes
                    </div>
                  </div>
                </button>
              </div>

              <p
                className="m-0 absolute top-[106px] left-[333px] tracking-[0.2px] leading-[24px] flex items-center w-[33px] h-11"
                onClick={() => setOpen(false)}
              >
                No
              </p>
              <p className="m-0 absolute font-[20px] top-[20px] left-[26px] tracking-[0.2px] leading-[24px] flex items-center w-[281px] h-11">
                Do you want to make use of this utility?
              </p>
            </div>
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop />
      </Sheet>
      <div className="absolute top-[60px] left-[21px] w-[348px] h-[458px]">
        <FlippingPages direction="right-to-left" onSwipeEnd={setSelected} selected={selected}>
          {flippage.map((page, index) => (
            <div key={index} className={`page page${index + 1}`}>
              <FlipPage index={index} />
            </div>
          ))}
        </FlippingPages>
      </div>

      <p className="m-0 absolute top-[533px] left-[23px] tracking-[0.2px] leading-[16px] flex items-center w-[268px] h-[22px] text-[16px]">
        Do you want to sell this stamp?
      </p>
      <Switch
        className="absolute top-[533px] left-[323px]"
        colorScheme="teal"
        defaultChecked={false}
        onChange={handleSwitch}
        isChecked={isOpen}
      />
      <Link href="/passport">
        <img className="absolute top-[14px] left-[21px] w-5 h-5" alt="" src="../back-icon.svg" />
      </Link>
      <img
        className=" absolute top-[593px] left-[197px] w-9 h-9"
        alt=""
        src="../down-icon3.svg"
        onClick={next}
      />
      <img
        className="rotate-180 absolute top-[593px] left-[157px] w-9 h-9"
        alt=""
        src="../down-icon3.svg"
        onClick={back}
      />
    </div>
  )
}

export default myPassport
