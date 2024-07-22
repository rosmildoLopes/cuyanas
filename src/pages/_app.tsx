import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "@/components/ui/toaster"


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="my-1 md:py-1 h-auto">
      <Component {...pageProps} />;
    </div>
  );
}
