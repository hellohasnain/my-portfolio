import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const navLinks = (
    <>
      <Link href="/">#home</Link>
      <Link href="/works">#works</Link>
      <Link href="/aboutme">#about-me</Link>
      <Link href="/contacts">#contacts</Link>
    </>
  );

  return (
    <div className="flex justify-between items-center py-4 px-6 max-w-6xl font-fira mt-5">
      {/* Logo Section */}
      <div className="flex items-center gap-3 mx-28">
        <Image src="/logo.png" alt="logo" width={20} height={20} />
        <h1>Hasnain</h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex space-x-6">{navLinks}</div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <button onClick={toggleDrawer} className="text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 lg:hidden">
          <div className="absolute top-0 left-0 w-64 bg-white h-full p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <Image src="/logo.png" alt="logo" width={20} height={20} />
                <h1>Hasnain</h1>
              </div>
              <button onClick={toggleDrawer} className="text-xl">
                &times;
              </button>
            </div>
            <div className="space-y-2">{navLinks}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
