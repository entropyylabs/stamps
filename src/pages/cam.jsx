import Link from "next/link"
import React, { useState, useEffect } from "react"
import Cameraview from "../components/Cameraview"
import { useRouter } from "next/router"

const Cam = () => {
  const [showImage, setShowImage] = useState(false)
  const router = useRouter()
  const { hunt } = router.query

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowImage(true)
    }, 7000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])
  return (
    <div>
      <div style={{ zIndex: 10000000, position: "absolute" }}>
        <Link href={{ pathname: "/celebration", query: { hunt: hunt } }}>
          {showImage ? (
            <img
              className="animate-spin fixed top-[250px] left-[100px] h-[202px] w-[207px]"
              alt=""
              src={hunt === "mickey" ? "../mickey.png" : "../jordans.png"}
            />
          ) : (
            <div className="hidden">hello</div>
          )}
        </Link>
      </div>
      <div style={{ zIndex: 0 }}>
        <Cameraview />
      </div>
    </div>
  )
}

export default Cam
