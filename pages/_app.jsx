import "../styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const bar = new ProgressBar({
  size: 5,
  color: "#FE595E",
  className: "z-50",
  delay: 10,
});

Router.events.on("routeChangeStart", bar.start);
Router.events.on("routeChangeComplete", bar.finish);
Router.events.on("routeChangeError", bar.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
