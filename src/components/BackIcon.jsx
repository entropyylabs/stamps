import React from "react"
import Link from "next/link"

const BackIcon = ({ to }) => {
  return (
    <Link href={to}>
      <img className="absolute top-[14px] left-[21px] w-5 h-5" alt="" src="../back-icon.svg" />
    </Link>
  )
}

export default BackIcon
