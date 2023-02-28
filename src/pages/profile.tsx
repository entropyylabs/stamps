import React from "react"
import HamMenu from "../components/HamMenu"
import { Logout } from "@components/Logout"
import { useGraphQLQuery } from "../graphql/useGraphQLQuery"
import { useAuthContext } from "../hooks/useAuthContext"
import { WalletQuery, WalletDocument } from "../../generated/graphql"
import BackIcon from "../components/BackIcon"
import Link from "next/link"
import { useDisclosure } from "@chakra-ui/react"
import { WalletSwitcherModal } from "ui/Wallet/WalletSwitcherModal"

const profile = () => {
  const { session, signIn, isLoading } = useAuthContext()

  const { wallet, fetching: walletFetching } = useGraphQLQuery<WalletQuery>({
    query: WalletDocument,
    pause: isLoading,
  })

  const disclosure = useDisclosure()
  const fetching = walletFetching || isLoading

  return (
    <div>
      <div className="relative bg-white w-full h-[665px] overflow-hidden text-left text-4xl text-black font-work-sans">
        <HamMenu />
        <WalletSwitcherModal disclosure={disclosure} />
        <div className="absolute top-[114px] left-[21px] w-[348px] h-64 text-left text-lg text-gray-100 font-work-sans">
          <div className="absolute top-[0px] left-[0px] w-[348px] h-64">
            <img
              className="absolute top-[0px] left-[0px] w-[348px] h-64"
              alt=""
              src="../profile-card.svg"
            />

            <div className="absolute top-[21px] left-[16px] tracking-[0.2px] leading-[20px] flex items-center w-[123px] h-[22px]">
              Wallet address
            </div>
            <div>
              <a target="_blank" href={`https://testnet.flowscan.org/account/${wallet?.address}`}>
                <div className="absolute top-[24px] left-[171px] tracking-[0.2px] leading-[20px] h-[22px] w-[143px] overflow-hidden text-black">
                  {wallet?.address}
                </div>
                <img
                  className="absolute top-[calc(50%_-_106px)] left-[calc(50%_+_138px)] w-6 h-6 overflow-hidden"
                  alt=""
                  src="../ckchevronright.svg"
                />
              </a>
            </div>

            <div className="absolute top-[85px] left-[18px] tracking-[0.2px] leading-[20px] flex items-center w-[123px] h-[22px]">
              Status
            </div>
            <b className="absolute top-[87px] left-[284px] tracking-[0.2px] leading-[20px] w-[48px] overflow-hidden h-[22px] text-black">
              {wallet?.state?.toString()}
            </b>

            <div className="absolute top-[149px] left-[18px] tracking-[0.2px] leading-[20px] flex items-center w-36 h-[22px]">
              Number of items
            </div>

            <div className="absolute top-[213px] left-[17px] tracking-[0.2px] leading-[20px] flex items-center w-36 h-[22px]">
              Wallet Owner
            </div>
            <div className="absolute top-[213px] left-[154px] w-[170px] h-[22px] overflow-hidden tracking-[0.2px] leading-[20px] text-black">
              {wallet?.appUser?.email}
            </div>

            <div>
              <Link href="/passport">
                <div>
                  <div className="absolute top-[calc(50%_+_20px)] left-[calc(50%_+_118px)] tracking-[0.2px] leading-[20px] h-[22px] w-[23px] overflow-hidden text-black">
                    {wallet?.nfts?.length}
                  </div>
                  <img
                    className="absolute top-[calc(50%_+_20px)] left-[calc(50%_+_138px)] w-6 h-6 overflow-hidden"
                    alt=""
                    src="../ckchevronright.svg"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-mediumblue absolute top-[407px] left-[81px] rounded-lg w-[228px] h-[46px]"
          onClick={(e) => {
            disclosure.onOpen()
          }}
        >
          <div className="absolute top-[15px] left-[27px] w-[228px] h-4">
            <div className="absolute top-[0px] left-[0px] text-xl tracking-[0.6px] leading-[16px] font-work-sans text-white text-center">
              Switch or Add wallet
            </div>
          </div>
        </button>
        <BackIcon to="/" />
        <div className="absolute top-[50px] left-[21px] w-[302px] h-12">
          <p className="m-0 absolute top-[0px] left-[0px] tracking-[0.2px] leading-[32px] flex items-center w-[302px] h-12">{`Your Profile `}</p>
        </div>
      </div>

      <Logout />
    </div>
  )
}

export default profile
