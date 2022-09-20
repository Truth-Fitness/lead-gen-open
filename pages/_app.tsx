import "../styles/globals.css";
import type { AppProps } from "next/app";
import Image from "next/image";
import { useEffect } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
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
      <GoogleReCaptchaProvider
        reCaptchaKey="6LffzxUiAAAAAAnhLy-OrukIg8ZC-Ya3oho1hdf7"
        scriptProps={{
          async: false,
          defer: false,
          appendTo: "head",
          nonce: undefined,
        }}
      >
        <div className=" m-auto">
          <Component {...pageProps} />
        </div>
      </GoogleReCaptchaProvider>
    </div>
  );
}

export default MyApp;
