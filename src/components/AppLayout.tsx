import { useDisclosure, useMediaQuery } from "@chakra-ui/react"
import { useState, useEffect } from "react"
type Props = {
  children: React.ReactNode
  showSidebar?: boolean
  title?: string
}

export default function AppLayout({ children, showSidebar = false }: Props) {
  const [isMobile] = useMediaQuery("(max-width: 768px)")

  if (isMobile) {
    return <>{children}</>
  }
  return <div>Please open this link on a mobile device for the complete experience!</div>
}
