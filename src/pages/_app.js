import "@/styles/globals.css";
import { Roboto } from "next/font/google";
import { RecoilRoot } from "recoil";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--roboto-font",
});

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <div className="font-roboto w-[360px] mx-auto">
        <Component {...pageProps} />
      </div>
    </RecoilRoot>
  );
}
