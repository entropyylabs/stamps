import React, { useState } from "react"
import { flippage } from "../utils/pageConfig"
import Sheet from "react-modal-sheet"

const FlipPage = ({ index }) => {
  const [utility1, setUtility1] = useState(false)
  const [utility2, setUtility2] = useState(false)
  const [selectedUtility, setSelectedUtility] = useState(0)
  const [isOpen, setOpen] = useState(false)

  const handleUtility = (number) => {
    setSelectedUtility(number)
    setOpen(true)
  }

  const markUtility = (condition) => {
    if (condition) {
      switch (selectedUtility) {
        case 1:
          setUtility1(true)
          break
        case 2:
          setUtility2(true)
          break
      }
    } else {
      switch (selectedUtility) {
        case 1:
          setUtility1(false)
          break
        case 2:
          setUtility2(false)
          break
      }
    }
    setOpen(false)
  }

  return (
    <main className="absolute top-[0px] left-[0px] w-[348px] h-[458px] text-left text-base text-orangered font-work-sans">
      <Sheet isOpen={isOpen} onClose={() => setOpen(false)} detent="content-height">
        <Sheet.Container style={{ border: "2px solid black" }}>
          <Sheet.Header />
          <Sheet.Content>
            <div className="relative h-[172px]">
              <div className="absolute top-[110px] left-[205px] w-28 h-10">
                <button
                  className="cursor-pointer [border:none] p-0 bg-gray-100 absolute top-[0px] left-[0px] rounded-lg w-28 h-10"
                  onClick={() => markUtility(true)}
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
                onClick={() => markUtility(false)}
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
      <div className="absolute top-[0px] left-[0px] w-[348px] h-[458px]">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[348px] h-[458px] border-[3px] border-solid border-black" />
      </div>
      <div className="absolute top-[198px] left-[23px] w-full h-[71px]">
        <b className="absolute top-[0px] left-[0px] text-[32px] tracking-[0.2px] leading-[32px] flex text-black text-center items-center justify-center  h-[49px]">
          {flippage[index].huntName}
        </b>
        <b className="absolute top-[49px]  left-[0px] text-[12px] tracking-[0.2px] leading-[20px] flex items-center w-[195px] h-[22px]">
          EXPIRES : {flippage[index].huntExpiry}
        </b>
      </div>
      <div className="absolute top-[275px] left-[23px] w-[303px] h-[159px] text-gray-300">
        <img
          className="absolute z-0 top-[26px] left-[0px] rounded-md w-[302px] h-[133px]"
          alt=""
          src="../rectangle-377.svg"
        />

        <div
          className="utility-1-tile"
          onClick={() => {
            handleUtility(1)
          }}
        >
          <img
            className="absolute h-[20.13%] w-[10.56%] top-[30.82%] right-[77.56%] bottom-[49.06%] left-[11.88%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={flippage[index].huntUtility1Icon}
          />
          {utility1 && (
            <img
              className="absolute top-[27.04%] right-[82.84%] bottom-[57.86%] left-[9.24%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="../cross.svg"
            />
          )}

          <div className="absolute text-[12px] top-[93px] text-black opacity-50 left-[36px] tracking-[0.2px] leading-[14px] flex  w-[81px] h-[45px]">
            {flippage[index].huntUtility1}
          </div>
        </div>

        <div
          className="utility-2-tile"
          onClick={() => {
            handleUtility(2)
          }}
        >
          <img
            className="absolute w-[10.56%] top-[30.82%] right-[33.99%] left-[55.45%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={flippage[index].huntUtility2Icon}
          />
          {utility2 && (
            <img
              className="absolute top-[27.04%] right-[39.84%] bottom-[57.86%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="../cross.svg"
            />
          )}

          <div className="absolute text-[12px] text-black opacity-50 top-[93px] left-[168px] tracking-[0.2px] leading-[14px] flex min-w-[81px] max-w-[113px] h-[45px]">
            {flippage[index].huntUtility2}
          </div>
        </div>

        <div className="absolute top-[2px] left-[0px] tracking-[0.2px] leading-[20px] font-medium text-gray-400 flex items-center w-[65px] h-[22px] text-[12px]">
          UTILITY :
        </div>
      </div>
      <img
        className="animate-pulse absolute top-[15px] left-[93px] w-[162.73px] h-[179px]"
        alt=""
        src={flippage[index].huntImage}
      />
    </main>
  )
}

export default FlipPage
