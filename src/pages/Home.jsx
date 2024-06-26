import HeaderImage from "../assets/header-image.gif";
import SecureImage from "../assets/secure-shield.png";
import BuyingImage from "../assets/buying.png";
import WalletImage from "../assets/wallet.png";
import NFTImage from "../assets/nft.png";
import Crypto1Image from "../assets/crypto.png";
import Crypto2Image from "../assets/crypto-1.png";
import Crypto3Image from "../assets/crypto-2.png";
import Crypto4Image from "../assets/crypto-3.png";
import Crypto5Image from "../assets/crypto-4.png";

import { Link } from "react-router-dom";

const Home = () => {
  const stats = [
    { id: 1, name: "Transactions every 24 hours", value: "$54M" },
    { id: 2, name: "Assets under holding", value: "100+" },
    { id: 3, name: "New users annually", value: "10,000" },
  ];
  return (
    <div>
      <section>
        <div className="mx-auto px-4 py-8 shadow sm:px-6 sm:py-12 lg:px-8 lg:py-10">
          <div className="mx-auto max-w-[80rem]">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                  alt="Party"
                  src={HeaderImage}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div className="lg:py-28">
                <h2
                  className="text-3xl font-medium leading-tight sm:text-5xl"
                  style={{ fontFamily: "poppins" }}
                >
                  <span className="font-bold">Secure</span> and{" "}
                  <span className="font-bold">Easy</span> way to{" "}
                  <span className="font-bold">Trade</span>
                </h2>

                <p className="mt-4 text-gray-600">
                  You cannot discover new oceans unless you have the courage to
                  lose sight of the shore…and move on!
                </p>

                <Link
                  to="/wallet"
                  className="mt-8 inline-block rounded bg-emerald-700 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-800 focus:outline-none"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />

      <div className="mx-auto max-w-[80rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="my-16 space-y-2 text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            The most trusted cryptocurrency platform
          </h1>
          <p className="text-lg font-medium text-gray-600">
            Here are a few reasons why you should choose Coinex
          </p>
        </div>
        <div className="grid items-center gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="px-4 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center">
              <img src={SecureImage} alt="Secure Image" />
            </div>
            <div className="mt-5 ">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Secure storage
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                We store the vast majority of the digital assets in secure
                offline storage.
              </p>
            </div>
          </div>

          <div className="px-4 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center">
              <img src={WalletImage} alt="Add Wallet" />
            </div>
            <div className="mt-5 ">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Add coins to your Wallet
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Add bitcoins you’ve created or exchanged via credit card.
              </p>
            </div>
          </div>

          <div className="px-4 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center">
              <img src={BuyingImage} alt="Add Wallet" />
            </div>
            <div className="mt-5 ">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Buy/Sell with Wallet
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Coinex supports a variety of the most popular digital
                currencies.
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div className="bg-emerald-600 py-24">
        <div className="mx-auto max-w-[85rem] px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col">
                <dt className="text-base leading-7 text-white">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />

      <section>
        <div className="mx-auto max-w-[85rem] px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
              <h2 className="text-3xl font-bold leading-10 sm:text-4xl">
                Boost your earnings with Coinex
              </h2>

              <p className="mt-4 text-gray-600">
                Upgrade your account by owning BTL in your DeFi protfolio to
                earn better yield.
              </p>

              <Link
                to="/wallet"
                className="mt-8 inline-block rounded bg-emerald-700 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-800 focus:outline-none"
              >
                Read More
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
              <Link
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none"
                to="/wallet"
              >
                <span className="inline-block">
                  <img
                    src={Crypto1Image}
                    className="h-14 w-14 "
                    alt="Feature Icon"
                  />
                </span>

                <h2 className="mt-2 font-bold">Migration</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Click here to migrate with no hustle
                </p>
              </Link>

              <Link
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                to="/wallet"
              >
                <span className="inline-block">
                  <img
                    src={NFTImage}
                    className="h-14 w-14 "
                    alt="Feature Icon"
                  />
                </span>

                <h2 className="mt-2 font-bold">NFTs</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Click here to mint/transfer NFTs or if you need support on how
                  to recieve NFTs
                </p>
              </Link>

              <Link
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none"
                to="/wallet"
              >
                <span className="inline-block">
                  <img
                    src={Crypto2Image}
                    className="h-14 w-14 "
                    alt="Feature Icon"
                  />
                </span>

                <h2 className="mt-2 font-bold">Swap / Exchange</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  24hrs support to issues relating to swap or exchage of coin
                </p>
              </Link>

              <Link
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none"
                to="/wallet"
              >
                <span className="inline-block">
                  <img
                    src={Crypto3Image}
                    className="h-14 w-14 "
                    alt="Feature Icon"
                  />
                </span>

                <h2 className="mt-2 font-bold">Claim Reward</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Click here to claim your reward or any related issues
                </p>
              </Link>

              <Link
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none"
                to="/wallet"
              >
                <span className="inline-block">
                  <img
                    src={Crypto4Image}
                    className="h-14 w-14 "
                    alt="Feature Icon"
                  />
                </span>

                <h2 className="mt-2 font-bold">Claim Airdrop</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Click to claim airdropp or related issues
                </p>
              </Link>

              <Link
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none"
                to="/wallet"
              >
                <span className="inline-block">
                  <img
                    src={Crypto5Image}
                    className="h-14 w-14 "
                    alt="Feature Icon"
                  />
                </span>

                <h2 className="mt-2 font-bold">Transaction Delay</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Click to submit related issues on transactions
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
    </div>
  );
};


export default Home