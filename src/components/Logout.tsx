import { Button } from "@chakra-ui/react"
import React from "react"
import { useAuthContext } from "../hooks/useAuthContext"
export function Logout() {
  const { signOut } = useAuthContext()

  return (
    <button
      className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[472px] left-[164px] w-[63px] h-4"
      onClick={() => {
        signOut()
      }}
    >
      <div className="absolute top-[0px] left-[0px] w-[83px] h-4">
        <div className="absolute top-[0px] left-[0px] text-xl tracking-[0.6px] leading-[16px] font-work-sans text-gray-100 text-center">
          Log out
        </div>
      </div>
    </button>
  )
}
