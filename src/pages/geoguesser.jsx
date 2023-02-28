import React, { useState, useEffect } from "react"
import { Input } from "@chakra-ui/react"
import GeoGuesser from "../components/GeoGuesser"
import Link from "next/link"
import { useRouter } from "next/router"

const Geoguesser = () => {
  const [answer, setAnswer] = useState("")
  const router = useRouter()
  const { hunt } = router.query

  useEffect(() => {
    setTimeout(() => {
      router.push({ pathname: "/geoguesser2", query: { hunt: hunt } })
    }, 15000)
  }, [answer])

  const checkAnswer = () => {
    const answerLower = answer.toLowerCase()
    if (answerLower === "fantasyland") {
      setTimeout(() => {
        router.push({ pathname: "/geoguesser2", query: { hunt: hunt } })
      }, 1000)
    }
  }
  return (
    <div className="relative bg-white w-full h-[665px] overflow-hidden text-left text-sm text-black font-work-sans">
      <div className="absolute top-[140px] left-[32px] w-[325px] h-[330px]">
        <div className="absolute top-[0px] left-[0px] w-[325px] h-[330px] object-cover">
          <GeoGuesser hunt={hunt} />
        </div>
      </div>
      <Input
        className="bg-[transparent] absolute top-[528px] left-[21px]"
        variant="outline"
        width="348px"
        borderColor="#262626"
        focusBorderColor="#262626"
        size="md"
        placeholder="Answer"
        w="348px"
        onChange={(e) => setAnswer(e.target.value)}
      />
      <div className="absolute top-[46px] left-[21px] w-[313px] h-[58px]">
        <p className="m-0 absolute top-[12px] left-[0px] tracking-[0.2px] leading-[32px] flex items-center w-[61px] h-3.5">
          CLUE 1
        </p>
        <p className="m-0 absolute top-[28px] left-[0px] text-[24px] leading-[24px] flex items-center w-[313px] h-[41px]">
          Guess this place!
        </p>
      </div>
      <div className="absolute top-[478px] left-[56px] w-[278px] h-[26px]">
        <p className="m-0 absolute top-[0px] left-[0px] leading-[20px] flex italic items-center w-[278px] h-[26px]">
          Maybe your stamp is located here?
        </p>
      </div>
      <div onClick={checkAnswer}>
        <img className="absolute top-[593px] left-[177px] w-9 h-9" alt="" src="../check.svg" />
      </div>

      <Link href="/hunt">
        <img className="absolute top-[14px] left-[21px] w-5 h-5" alt="" src="../back-icon.svg" />
      </Link>
    </div>
  )
}

export default Geoguesser
