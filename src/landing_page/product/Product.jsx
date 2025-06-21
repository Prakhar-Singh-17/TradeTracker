import Hero from "./Hero";
import LeftImage from "./LeftImage";
import RightImage from "./RightImage";
import Universe from "./Universe";

export default function Product() {
  return (
    <>
      <Hero />
      <LeftImage
        imageUrl="assets/signup.png"
        heading="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        link1="demo"
        link2="learn"
      />
      <RightImage
        imageUrl="assets/console.png"
        heading="Console"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        link1="learn"
      />
      <LeftImage
        imageUrl="assets/coin.png"
        heading="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        link1="coin"
        link2=""
      />
      <RightImage
        imageUrl="assets/kiteconnect.png"
        heading="Kite Connect API"
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        link1="kite connect"
      />
      <Universe/>
    </>
  );
}
