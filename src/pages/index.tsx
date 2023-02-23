import AppLayout from "../components/AppLayout"
import { Center, Box, VStack, Text, Button } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { WalletDetails } from "ui/Wallet/WalletDetails"
import { Logout } from "@components/Logout"
import { useGraphQLQuery } from "graphql/useGraphQLQuery"
import { useAuthContext } from "hooks/useAuthContext"
import { WalletQuery, WalletDocument } from "../../generated/graphql"

import { FaGoogle } from "react-icons/fa"

const HomePage = () => {
  const { session, signIn, isLoading } = useAuthContext()

  const { wallet, fetching: walletFetching } = useGraphQLQuery<WalletQuery>({
    query: WalletDocument,
    pause: isLoading,
  })

  const fetching = walletFetching || isLoading

  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowButton(true)
    }, 3000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <AppLayout>
      {!session && (
        <>
          <div className="relative bg-white w-full h-[665px] overflow-hidden text-left text-4xl text-gray-100 font-work-sans">
            <div className="absolute top-[182px] left-[93px] w-[203px] h-[269px]">
              <img
                className="animate-bounce absolute top-[0px] left-[0px] w-[203px] h-[229.31px]"
                alt=""
                src="../stamps-logo.svg"
              />
              <div className="absolute top-[240px] left-[37px] tracking-[0.2px] leading-[32px] font-medium flex items-center w-[129px] h-[29px]">
                stamps!
              </div>
            </div>

            <div className="absolute top-[610px] left-[130px] text-xl tracking-[0.2px] leading-[16px] font-medium flex items-center w-[129px] h-[19px]">
              by entropy labs
            </div>
            <div className="absolute top-[520px] w-full justify-center flex items-center">
              {showButton && (
                <Button
                  p="8"
                  isLoading={isLoading}
                  onClick={() => signIn()}
                  colorScheme="red"
                  leftIcon={<FaGoogle />}
                >
                  Sign in with Google
                </Button>
              )}
            </div>
          </div>
        </>
      )}
      {session && (
        <VStack>
          <WalletDetails
            isLoading={fetching}
            walletAddress={wallet?.address}
            walletItems={wallet?.nfts?.length}
            walletStatus={wallet?.state?.toString()}
            walletOwnerEmail={wallet?.appUser?.email}
          />
          <h1>Hello</h1>
          <Logout />
        </VStack>
      )}
    </AppLayout>
  )
}

export default HomePage
