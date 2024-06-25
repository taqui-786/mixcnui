import { Github, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/mixuiLogo.png";
function Navbar() {
  return (
    <header className="bg-white w-full">
      <div className="mx-auto flex h-16  items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="flex text-primary  " href="#">
          {/* <Image src={logo} alt='mylogo'  priority loading='eager' className='h-10 w-auto' /> */}
          <span className="text-3xl font-bold font-mono">Mixcn-Ui</span>
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav
            aria-label="Global"
            className=" md:flex hidden flex-1 items-center justify-center"
          >
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className="text-primary transition hover:text-gray-500/75"
                  href="/components"
                >
                  {" "}
                  Components{" "}
                </Link>
              </li>

              <li>
                <Link
                  className="text-primary transition hover:text-gray-500/75"
                  href="/components/#templates"
                >
                  {" "}
                  Templates{" "}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex gap-3 sm:gap-4">
              <Link
                href={"https://twitter.com/Taquiimam14"}
                className="p-1 hover:bg-gray-100"
                target="_blank"
              >
                <Twitter className="h-5 w-5 text-black" />
              </Link>
              <Link
                href={"https://github.com/taqui-786/mixui"}
                target="_blank"
                className="p-1 hover:bg-gray-100"
              >
                <Github className="h-5 w-5 text-black" />
              </Link>
            </div>

            
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
