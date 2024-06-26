import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0">
      <header className="bg-white shadow  ">
        <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link
                className="block text-2xl font-semibold text-emerald-700"
                to="/"
              >
                Dev-connect
              </Link>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <Link
                    className="rounded-md bg-emerald-700 px-5 py-2.5 text-sm font-medium text-white shadow "
                    to="/wallet"
                  >
                    Wallet
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
