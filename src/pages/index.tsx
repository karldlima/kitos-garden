"use client";
import { GetStaticProps } from "next";

import { getEntry } from "../content/provider";

export interface PageProps {
  homeData: any;
}

export default function Page({ homeData }: PageProps) {
  return <div>home</div>;
}

export async function getStaticProps(): GetStaticProps<PageProps> {
  const responseData: any = await getEntry("/home", {
    populate: ["hero"],
  });
  return {
    props: {
      homeData: JSON.stringify(responseData),
    },
  };
}
