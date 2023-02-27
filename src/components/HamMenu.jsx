import React from "react"
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react"
import Link from "next/link"

const HamMenu = () => {
  return (
    <div className="absolute top-[14px] left-[349px] w-5 h-5 z-10">
      <Menu>
        <MenuButton style={{ padding: 0, backgroundColor: "transparent" }} as={Button}>
          <img className="" alt="" src="../menu.svg" />
        </MenuButton>
        <MenuList style={{ marginRight: "21px", marginTop: "-10px" }}>
          <Link href="/passport">
            <MenuItem style={{ color: "#262626", fontSize: "16px" }}>My Passport</MenuItem>
          </Link>
          <Link href="/">
            <MenuItem style={{ color: "#262626", fontSize: "16px" }}>Collect</MenuItem>
          </Link>
          <Link href="/buy">
            <MenuItem style={{ color: "#262626", fontSize: "16px" }}>Buy</MenuItem>
          </Link>
          <Link href="/profile">
            <MenuItem style={{ color: "#262626", fontSize: "16px" }}>Your Profile</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </div>
  )
}

export default HamMenu
