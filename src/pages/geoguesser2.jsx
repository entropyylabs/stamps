import Link from "next/link"
import GeoGuesser from "../components/GeoGuesser"
import { useRouter } from "next/router"

const Geoguesser2 = () => {
  const router = useRouter()
  const { hunt } = router.query
  return (
    <div className="relative bg-white w-full h-[665px] overflow-hidden text-center text-2xl text-orangered font-work-sans">
      <div className="absolute top-[140px] left-[32px] w-[325px] h-[330px]">
        <GeoGuesser hunt={hunt} />
      </div>
      <div className="absolute top-[486px] left-[54px] w-72 h-10">
        <p className="m-0 absolute top-[0px] left-[0px] leading-[20px] font-bold flex items-center justify-center w-72 h-10">
          SEEMS LIKE THE STAMP IS AROUND YOU!
        </p>
      </div>
      <img className="absolute top-[14px] left-[21px] w-5 h-5" alt="" src="../back-icon3.svg" />
      <div className="absolute top-[58px] left-[27px] w-[313px] h-[47px] text-left text-xl text-black">
        <p className="m-0 absolute top-[0px] left-[0px] tracking-[0.2px] leading-[32px] flex items-center w-[61px] h-3.5">
          CLUE 1
        </p>
        <p className="m-0 absolute top-[22px] left-[0px] text-3xl leading-[24px] flex items-center w-[313px] h-[25px]">
          Guess this place!
        </p>
      </div>
      <Link href="/cam">
        <button className="cursor-pointer [border:none] p-0 bg-gray-100 absolute top-[544px] left-[102px] rounded-lg w-[186px] h-10">
          <div className="absolute top-[12px] left-[34px] w-[118px] h-4">
            <div className="absolute top-[0px] left-[19px] text-xl tracking-[0.6px] leading-[16px] text-white text-center">
              <span className="font-work-sans">Grab it now</span>
            </div>
            <img
              className="absolute top-[1px] left-[0px] w-[13px] h-3.5 overflow-hidden"
              alt=""
              src="../camera.svg"
            />
          </div>
        </button>
      </Link>
    </div>
  )
}

export default Geoguesser2
