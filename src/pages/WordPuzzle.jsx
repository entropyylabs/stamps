import React, { useState, useEffect } from "react"
import Word from "../components/Word"
import Link from "next/link"
import { useRouter } from "next/router"

const WordPuzzle = () => {
  const router = useRouter()

  const { hunt } = router.query

  const question =
    hunt === "mickey" ? " Who is Mickey Mouse’s bestfriend?" : "Who is founder of Nike?"

  const [counter, setCounter] = useState(100)
  const [done, setDone] = useState(false)
  const [doneCounter, setDoneCounter] = useState(3)
  useEffect(() => {
    counter < 5 && setDone(true)
    done && console.log("done")
    counter > 0 && setTimeout(() => setCounter(counter - 5), 1000)
  }, [counter])
  return (
    <div className="relative bg-[#FFC022] w-full h-[844px] overflow-hidden text-left text-xs text-black font-work-sans">
      <div className="absolute top-[168px] left-[32px]  h-[442px] object-cover">
        <Word />
      </div>
      <p className="m-0 absolute text-[16px] top-[83px] left-[21px] tracking-[0.2px] leading-[32px] flex items-center w-[61px] h-3.5">
        CLUE 1
      </p>
      <p className="m-0 absolute text-[24px] top-[113px] left-[21px]  tracking-[0.2px] leading-[24px] flex items-center w-[313px] h-[41px]">
        {question}
      </p>
      {done ? (
        <div className="absolute top-[556px] left-[34px] w-[322px] h-[50px] text-center text-2xl text-gray-100">
          <div className="absolute text-[20px] top-[0px] left-[0px] tracking-[0.2px] leading-[24px] flex items-center justify-center w-[322px] h-[50px]">
            WELL DONE! THATS CORRECT!
          </div>
          <div className="absolute text-[20px] top-[60px] left-[80px] tracking-[0.2px] leading-[24px] flex items-center justify-center w-[322px] h-[50px]">
            <Link href={{ pathname: "/geoguesser", query: { hunt: hunt } }}>
              <button className="cursor-pointer [border:none] p-0 bg-gray-100 absolute top-[0px] left-[0px] rounded-lg w-40 h-10">
                <div className="absolute top-[12px] left-[30px] w-20 h-4">
                  <div className="absolute top-[0px] left-[0px] text-xl tracking-[0.6px] leading-[16px] font-medium font-work-sans text-white text-center">
                    Next clue
                  </div>
                </div>
                <img
                  className="rotate-180 invert absolute top-[13px] left-[116px] w-3.5 h-3.5 overflow-hidden"
                  alt=""
                  src="../back-icon.svg"
                />
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="absolute top-[600px] left-[21px]" style={{ width: "348px", height: "5px" }}>
          <div
            style={{
              width: `${counter}%`,
              height: "100%",
              backgroundColor: "#52C41A",
              borderRadius: "14px",
              transition: "width 1s ease-in-out",
            }}
          ></div>
        </div>
      )}
      <Link href="/hunt">
        <img className="absolute top-[14px] left-[21px] w-5 h-5" alt="" src="../back-icon.svg" />
      </Link>
    </div>
  )
}

export default WordPuzzle
