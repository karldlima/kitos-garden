import Head from "next/head";
import classNames from "classnames";

import { avenir, rounds } from "@/design-system/utils/fonts";
import { Header, Footer } from "@/components/index";

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
      <Head>
        <link rel="shortcut icon" href="/assets/icons/k-icon.jpeg" />
      </Head>
      <Header />
      <div className="bg-primary grow mb-16 md:mb-20">{children}</div>
      <Footer />
    </main>
  );
}
