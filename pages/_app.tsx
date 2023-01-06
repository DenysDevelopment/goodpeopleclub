import "../styles/app.scss";
import type { AppProps } from "next/app";
import { SessionProvider, useSession } from "next-auth/react";
import React from "react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider
      session={session}
      refetchInterval={5 * 60}
      // refetchOnWindowFocus={true}
    >
      {/* {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : ( */}
      <Component {...pageProps} />
      {/* )} */}
    </SessionProvider>
  );
}
// function Auth({ children }: { children: React.ReactNode }) {
//   // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
//   const { status } = useSession({ required: true });

//   if (status === "loading") {
//     return <div>Loading...</div>;
//   }

//   return children;
// }
