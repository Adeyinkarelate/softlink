import { Link } from "react-router-dom";
import { Wallets } from "../data/Wallets";


const Wallet = () => {
  return <>
    <header className="shadow h-[60vh] flex flex-col items-center justify-center page-header">
      <h1 className="text-3xl font-bold text-white sm:text-5xl">Wallet</h1>
      <ol className="flex items-center whitespace-nowrap min-w-0 mt-2" aria-label="Breadcrumb">
        <li className="text-sm">
          <Link className="flex items-center text-gray-300 hover:text-emerald-400" to="/">
            Home
            <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-200" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </Link>
        </li>
        <li className="text-sm font-semibold text-white" aria-current="page">
          Wallet
        </li>
      </ol>
    </header>

    <br /><br /><br /><br />

    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 items-center gap-6 md:gap-10">

        {
          Wallets.map((item, index) => (
            <Link to='/connect' key={index} className="w-full h-full bg-white shadow-md rounded-lg p-3">
              <img src={item.image} alt="Image" />
            </Link>
          ))
        }

      </div>
    </div>

  </>;
};

export default Wallet;
