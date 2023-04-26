import Head from "next/head";
import { Quicksand } from "next/font/google";
import Button from "@/shared/atoms/button";
import ChatLayout from "@/shared/layouts/chat-layout";
import { ReactNode } from "react";

const fontFamily = Quicksand({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${fontFamily.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>Chat Application</title>
        <meta name="description" content="A real time chat application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}

Home.getLayout = (page: ReactNode) => <ChatLayout>{page}</ChatLayout>;
