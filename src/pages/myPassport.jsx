import { Switch } from "@chakra-ui/react"
import React, { useState } from "react"
import { FlippingPages } from "flipping-pages"
import "flipping-pages/dist/style.css"
import Link from "next/link"
import Sheet from "react-modal-sheet"

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
          <div className="page page1">
            <main className="absolute top-[0px] left-[0px] w-[348px] h-[458px] text-left text-base text-orangered font-work-sans">
              <div className="absolute top-[0px] left-[0px] w-[348px] h-[458px]">
                <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[348px] h-[458px] border-[3px] border-solid border-black" />
              </div>
              <div className="absolute top-[198px] left-[23px] w-[222px] h-[71px]">
                <b className="absolute top-[49px]  left-[0px] text-[12px] tracking-[0.2px] leading-[20px] flex items-center w-[195px] h-[22px]">
                  EXPIRES : 5th JUNE 2023
                </b>
                <b className="absolute top-[0px] left-[0px] text-[32px] tracking-[0.2px] leading-[32px] flex text-black text-center items-center justify-center w-[196px] h-[49px]">
                  find Mickey!
                </b>
              </div>
              <div className="absolute top-[275px] left-[23px] w-[303px] h-[159px] text-gray-300">
                <div className="absolute text-[12px] top-[93px] text-black opacity-50 left-[36px] tracking-[0.2px] leading-[14px] flex items-center w-[81px] h-[45px]">
                  Free Mickey merch at the DISNEY Store
                </div>
                <div className="absolute text-[12px] text-black opacity-50 top-[93px] left-[168px] tracking-[0.2px] leading-[14px] flex items-center w-20 h-[45px]">
                  Free ticket to the next Disney movie
                </div>
                <img
                  className="absolute top-[26px] left-[0px] rounded-md w-[302px] h-[133px]"
                  alt=""
                  src="../rectangle-377.svg"
                />
                <img
                  className="absolute h-[20.13%] w-[10.56%] top-[30.82%] right-[33.99%] bottom-[49.06%] left-[55.45%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="../vector1.svg"
                />
                <img
                  className="absolute h-[14.15%] w-[4.49%] top-[33.76%] right-[37.21%] bottom-[52.1%] left-[58.29%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="../vector2.svg"
                />
                <img
                  className="absolute h-[20.13%] w-[10.56%] top-[30.82%] right-[77.56%] bottom-[49.06%] left-[11.88%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="../group.svg"
                />
                <div className="absolute top-[2px] left-[0px] tracking-[0.2px] leading-[20px] font-medium text-gray-400 flex items-center w-[65px] h-[22px] text-[12px]">
                  UTILITY :
                </div>
              </div>
              <img
                className="animate-pulse absolute top-[15px] left-[93px] w-[162.73px] h-[179px]"
                alt=""
                src="../disneystamp.svg"
              />
            </main>
          </div>
          <div className="page page2">
            <div className="absolute top-[0px] left-[0px] w-[348px] h-[458px]">
              <div className="absolute top-[0px] left-[0px] w-[348px] h-[458px]">
                <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[348px] h-[458px] border-[3px] border-solid border-black" />
              </div>
              <div className="absolute top-[198px] left-[23px] w-[233px] h-[71px]">
                <b className="absolute text-orangered text-[12px] top-[49px] left-[0px] tracking-[0.2px] leading-[20px] flex items-center w-[195px] h-[22px]">
                  EXPIRES : 10th JULY 2024
                </b>
                <b className="absolute top-[0px] text-[32px] left-[0px] text-3xl tracking-[0.2px] leading-[32px] flex text-black text-center items-center justify-center w-[233px] h-[49px]">
                  tesla premium
                </b>
              </div>
              <img
                className="animate-pulse absolute top-[15px] left-[93px] w-[162.73px] h-[179px]"
                alt=""
                src="../teslastamp.svg"
              />
              <div className="absolute top-[275px] left-[23px] w-[303px] h-[159px] text-gray-300">
                <div className="absolute top-[95px] text-[12px] text-black opacity-50 left-[36px] tracking-[0.2px] leading-[14px] flex items-center w-[81px] h-[45px]">
                  Access to exclusive features!
                </div>
                <div className="absolute top-[97px] left-[168px] tracking-[0.2px] leading-[14px] flex items-center w-[113px]">
                  <span className="[line-break:anywhere] w-full">
                    <p className=" text-[12px] text-black opacity-50 [margin-block-start:0] [margin-block-end:0px]">{`Be a part of `}</p>
                    <p className="m-0 text-[12px] text-black opacity-50">{`the next Tesla product launch `}</p>
                  </span>
                </div>
                <img
                  className="absolute top-[26px] left-[0px] rounded-md w-[302px] h-[133px]"
                  alt=""
                  src="../rectangle-377.svg"
                />
                <div className="absolute top-[2px] left-[0px] tracking-[0.2px] leading-[20px] font-medium text-gray-400 flex items-center w-[65px] h-[22px] text-[12px]">
                  UTILITY :
                </div>
                <img
                  className="absolute top-[51px] left-[36px] w-8 h-8"
                  alt=""
                  src="../frame-85.svg"
                />
                <img
                  className="absolute h-[20.13%] w-[10.56%] top-[30.82%] right-[33.99%] bottom-[49.06%] left-[55.45%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="../vector1.svg"
                />
                <img
                  className="absolute h-[14.15%] w-[4.49%] top-[33.76%] right-[37.21%] bottom-[52.1%] left-[58.29%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="../vector2.svg"
                />
              </div>
            </div>
          </div>
          <div className="page page3">
            <div className="absolute top-[0px] left-[0px] w-[348px] h-[458px]">
              <div className="absolute top-[0px] left-[0px] w-[348px] h-[458px]">
                <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[348px] h-[458px] border-[3px] border-solid border-black" />
              </div>
              <div className="absolute top-[198px] left-[23px] w-[247px] h-[71px]">
                <b className="absolute top-[49px] text-[12px] text-orangered left-[0px] tracking-[0.2px] leading-[20px] flex items-center w-[211px] h-[22px]">
                  EXPIRES : 17th MARCH 2023
                </b>
                <b className="absolute top-[0px] left-[0px] text-[32px] tracking-[0.2px] leading-[32px] flex text-black text-center items-center justify-center w-[243px] h-[49px]">{`h&m @ SPRING`}</b>
              </div>
              <div className="absolute top-[275px] left-[23px] w-[303px] h-[159px] text-gray-300">
                <div className="absolute text-[12px] text-black opacity-50 top-[95px] left-[36px] tracking-[0.2px] leading-[14px] flex items-center w-[81px] h-[45px]">
                  Get access to exclusive spring wear
                </div>
                <div className="absolute top-[97px] left-[168px] tracking-[0.2px] leading-[14px] flex items-center w-[113px]">
                  <span className="[line-break:anywhere] w-full">
                    <p className="text-[12px] text-black opacity-50 [margin-block-start:0] [margin-block-end:0px]">{`Be a part of `}</p>
                    <p className="text-[12px] text-black opacity-50 [margin-block-start:0] [margin-block-end:0px]">{`the next H&M `}</p>
                    <p className="m-0 text-[12px] text-black opacity-50">Fashion Showcase</p>
                  </span>
                </div>
                <img
                  className="absolute top-[26px] left-[0px] rounded-md w-[302px] h-[133px]"
                  alt=""
                  src="../rectangle-377.svg"
                />
                <img
                  className="absolute h-[20.13%] w-[10.56%] top-[31.45%] right-[33.99%] bottom-[48.43%] left-[55.45%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="../vector.svg"
                />
                <div className="absolute text-[12px] top-[2px] left-[0px] tracking-[0.2px] leading-[20px] font-medium text-gray-400 flex items-center w-[65px] h-[22px]">
                  UTILITY :
                </div>
                <img
                  className="absolute top-[51px] left-[36px] w-8 h-8"
                  alt=""
                  src="../frame-85.svg"
                />
              </div>
              <img
                className="animate-pulse absolute top-[15px] left-[93px] w-[162.73px] h-[179px]"
                alt=""
                src="../hmstamp.svg"
              />
            </div>
          </div>
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
