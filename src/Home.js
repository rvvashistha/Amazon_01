import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Baby/cnnjpp1/Baby/D92807365-_1_Tallhero_2xx._CB598669664_.jpg"
          alt="this is the banner img"
          className="home_image"
        />
        <div className="home_row">
          {/* Product */}
          <Product
            id={123456789}
            title={
              "You Only Live Once : What if you ran away from your life today? Twenty years later, three people are looking for you. Will you be able to find Elisha? Or will you end up finding yourself?"
            }
            price={29.99}
            image={
              "https://m.media-amazon.com/images/I/71dNsRuYL7L._SY466_.jpg"
            }
            rating={3}
          ></Product>
          <Product
            id={23456789}
            title="Apple MackBook Air :
                Apple 2023 MacBook Air laptop with M2 chip
                : 38.91cm (15.3 inch) Liquid Retina display,
                  8GB RAM 512GB SSD storage,.."
            price={899}
            image={
              "https://m.media-amazon.com/images/I/81xW62KXNhL._AC_SY175_.jpg"
            }
            rating={5}
          ></Product>
        </div>
        <div className="home_row">
          <Product
            id={345678910}
            title={
              "Harman Kardon Aura Studio 3: Award Winning Timeless Iconic & Elegant Design, Bluetooth Speaker with 360-Degree Immersive Sound & Ambient Light Effects"
            }
            price={999}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/71ecJTrTpUL._AC_SY175_.jpg"
            }
          ></Product>
          <Product
            id={45678910}
            title="JBL Tune 235NC in Ear Wireless ANC Earbuds (TWS), Massive 40Hrs Playtime with Speed Charge, Customizable Bass with Headphones App, 4 Mics for Perfect Calls, Google Fast Pair, Bluetooth 5.2 (Black)"
            price={500}
            rating={3}
            image={
              "https://m.media-amazon.com/images/I/51VfjoKvJVL._AC_UY327_FMwebp_QL65_.jpg"
            }
          ></Product>
          <Product
            id={567891011}
            title="Apple 2023 Mac Mini Desktop Computer M2 chip with 8‑core CPU and 10‑core GPU, 8GB Unified Memory, 512GB SSD Storage, Gigabit Ethernet. Works with iPhone/iPad"
            price={1000}
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/41GPyM+cVAL._AC_UY327_FMwebp_QL65_.jpg"
            }
          ></Product>
        </div>
        <div className="home_row">
          <Product
            id={6789101112}
            title="Samsung 34-inches 86.42cm LED Odyssey G5 Ultra WQHD, 165 Hz, 1ms, 1000R Curved Gaming Monitor, HDR10, AMD FreeSync Premium -LC34G55TWWWXXL, Black, 3440 X 1440 (WQHD) Pixels"
            price={850}
            rating={3}
            image={
              "https://m.media-amazon.com/images/I/71it2biogSS._AC_UY327_FMwebp_QL65_.jpg"
            }
          ></Product>
        </div>
      </div>
    </div>
  );
}

export default Home;
