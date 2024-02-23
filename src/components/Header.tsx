import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const Header = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-b-2 sticky top-0">
      <nav className="mx-auto flex items-center justify-between p-6 lg:px-8">
        <div className="flex items-center lg:gap-x-12">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              className="h-12 w-auto"
              src={"/assets/icons/k-icon.jpeg"}
              alt={"kitos garden icon"}
              width={500}
              height={500}
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};
