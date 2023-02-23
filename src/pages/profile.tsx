import React from "react"
import { Center, Box, VStack, Text, Button } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { WalletDetails } from "../ui/Wallet/WalletDetails"
import { Logout } from "@components/Logout"
import { useGraphQLQuery } from "../graphql/useGraphQLQuery"
import { useAuthContext } from "../hooks/useAuthContext"
import { WalletQuery, WalletDocument } from "../../generated/graphql"

const profile = () => {
  const { session, signIn, isLoading } = useAuthContext()

  const { wallet, fetching: walletFetching } = useGraphQLQuery<WalletQuery>({
    query: WalletDocument,
    pause: isLoading,
  })

  console.log(session)

  const fetching = walletFetching || isLoading

  return (
    <div>
      <VStack>
        <WalletDetails
          isLoading={fetching}
          walletAddress={wallet?.address}
          walletItems={wallet?.nfts?.length}
          walletStatus={wallet?.state?.toString()}
          walletOwnerEmail={wallet?.appUser?.email}
        />
        <Logout />
      </VStack>
    </div>
  )
}

export default profile
