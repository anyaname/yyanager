import "../styles/reset.css";
import type { AppProps } from "next/app";
import { CntrlProvider } from "@cntrl-site/sdk-nextjs";
import "@cntrl-site/sdk/style/sdk.css";

import QuestCard from "../components/QuestCard";

function App({ Component, pageProps }: AppProps) {
  return (
    <CntrlProvider>
      <QuestCard />
      <Component {...pageProps} />
    </CntrlProvider>
  );
}

export default App;
