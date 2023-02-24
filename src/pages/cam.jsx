import Link from "next/link"
import React, { useState, useEffect } from "react"
import Cameraview from "../components/Cameraview"

const Cam = () => {
  const [showImage, setShowImage] = useState(false)

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
        <Link href="/celebration">
          {/* {showImage && ( */}
          <img
            className="animate-spin fixed top-[250px] left-[100px] h-[202px] w-[207px]"
            alt=""
            src="../mickey.png"
          />
          {/* )} */}
        </Link>
      </div>
      <div style={{ zIndex: 0 }}>
        <Cameraview />
      </div>
    </div>
  )
}

export default Cam
