import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="xl:bg-black/0 bg-black/60 absolute z-30 w-full items-center xl-px-0 xl:h-[90px] sm:h-[30px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-y-6 lg:py-8 ">
          {/* logo */}
          <Link href="/">
            <Image
              src="/ensembleai.svg"
              alt="logo"
              width={220}
              height={48}
              priority
            />
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
