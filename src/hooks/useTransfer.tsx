import { backOff } from "exponential-backoff"
import { Session } from "next-auth"
import { useState } from "react"
import {
  WalletDocument,
  WalletState,
  TransferMutation,
  TransferMutationVariables,
} from "../../generated/graphql"
import { backendClient } from "../graphql/backendClient"
import { getClientFromSession } from "../graphql/getClientFromSession"
import posthog from "posthog-js"

const getReadyWallet = async (session: Session) => {
  const client = await getClientFromSession(session)
  const { wallet } = await client.request(WalletDocument)

  switch (wallet?.state) {
    case WalletState.PendingCreation:
      throw new Error("WalletCreationPending")

    case WalletState.CreationFailed:
      throw new Error("WalletCreationFailed")

    case WalletState.Ready:
      return true
  }
}

const readyWallet = async (session) => {
  return backOff(() => getReadyWallet(session))
}

const transferNFTModel = async (
  nftModelId: string,
  session: Session,
  onTransferEnd?: () => void
) => {
  try {
    await readyWallet(session)
    const { transfer } = await backendClient<TransferMutation, TransferMutationVariables>(
      "transferNFTModel",
      {
        nftModelId,
      }
    )
    onTransferEnd?.()
    return transfer
  } catch (e) {
    throw new Error("Error transferring NFTs to wallet")
  }
}

export function useTransfer() {
  const [isLoading, setLoading] = useState(false)
  return {
    transferNFTModel: async (nftModelId: string, session: Session, onTransferEnd?: () => void) => {
      try {
        setLoading(true)
        return await transferNFTModel(nftModelId, session, onTransferEnd).finally(() =>
          setLoading(false)
        )
      } catch (e) {
        posthog.capture("ERROR_FAILED_TRANSFERNFTMODEL_CALL", e)
      }
    },
    getReadyWallet,
    readyWallet,
    isLoading,
  }
}
