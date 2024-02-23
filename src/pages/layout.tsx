import classNames from "classnames";

import { avenir, rounds } from "@/design-system/utils/fonts";
import { Header } from "@/components/index";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className={classNames(
        rounds.variable,
        avenir.variable,
        "min-h-screen flex flex-col"
      )}
    >
      <Header />
      <div className="grow lg:py-12">{children}</div>
      {/* <Footer/> */}
    </main>
  );
}
