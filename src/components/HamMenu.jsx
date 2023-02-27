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
          <MenuItem style={{ color: "#262626", fontSize: "16px" }}>
            <Link href="/passport">My Passport</Link>
          </MenuItem>
          <MenuItem style={{ color: "#262626", fontSize: "16px" }}>
            <Link href="/">Collect</Link>
          </MenuItem>
          <MenuItem style={{ color: "#262626", fontSize: "16px" }}>
            <Link href="/buy">Buy</Link>
          </MenuItem>
          <MenuItem style={{ color: "#262626", fontSize: "16px" }}>
            <Link href="/profile">Your Profile</Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  )
}

export default HamMenu
