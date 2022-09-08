import "../styles/globals.css";
import type { AppProps } from "next/app";
import Image from "next/image";
import { useEffect } from "react";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
        <div className="px-6 w-full flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="logo"
              width={120}
              height={45}
              objectFit="contain"
            />
          </div>
        </div>
      </nav>
      <div className=" m-auto">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
