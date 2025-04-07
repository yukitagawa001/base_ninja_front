"use client";

import { use, useState } from "react";
// Removed unused import
import { useAccount } from "wagmi";
import "./main.css";
import { ConnectKitButton } from "connectkit";
import { Web3Provider } from "./Web3Provider";
import React, { createContext } from 'react';


export default function Home() {
  const { address, isConnected } = useAccount();
  const [buttonImgSrc, setButtonImgSrc] = useState(
    "https://ipfs.io/ipfs/bafkreiddypi3iq2jfv6vxwnoeicmzgyvkrz3wyerxyb4qomkb2yxo3tkuu"
  );

  React.useEffect(() => {
    if (isConnected && address) {
      (async () => {
        try {
          console.log("接続されたアドレス:", address);

          alert("接続中です。");
          setButtonImgSrc(
            "https://ipfs.io/ipfs/bafkreigaznzbyyvauoulj2nsg6gjgkiyebr4ufuhnbyg5q7673g4efr5ka"
          );

          await sendAddressToSheet(address || "");
        } catch (error) {
          console.error("ウォレット接続エラー:", error);
          alert("ウォレット接続に失敗しました。");
        }
      })();
    } else if (!isConnected) {
      alert("MetaMaskなどのウォレット拡張機能が必要です。");
    }
  }, [address, isConnected]);

  const sendAddressToSheet = async (address: string) => {
    const url =
      "https://script.google.com/macros/s/AKfycbxZRK_gEEHRHWpv6s8-PI-ecjdlOz8Q4KQzJsXpoK18Jto3Ksu9GrdPcEdsokRzX-1S/exec";
    const payload = { address: address };
    try {
      await fetch(url, {
        mode: "no-cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      console.log("送信完了");
    } catch (error) {
      console.error("送信エラー:", error);
    }
  };

  return (
      <div className="container">
        <div className="wallet-page">
          <h1 className="title">CONNECT WALLET TO GET YOUR BASE NINJA NFT</h1>

            <ConnectKitButton />
            {/* <button
              className="button-container"
              onClick={connectWallet}
            >
              <img
                src={buttonImgSrc}
                alt="Connect Wallet Button"
                className="button-img"
              />
            </button> */}

          <div className="character-container">
            <img
              src="https://ipfs.io/ipfs/bafkreifleva2iad2fpgbedcfrkz4yx462h2qemqbwvin64oiif3tho5lqy"
              alt="Ninja Cat Character"
              className="ninja-cat"
            />
            <img
              src="https://ipfs.io/ipfs/bafkreic5igjdply5mc5pypmk75rhd3w75kzkhyuet7bvz6wkvebr7qvnua"
              alt="Only Badge"
              className="only-badge"
            />
          </div>

          <p className="description">
            After acquiring your Base Ninja NFT, you'll get a special theme for
            crypto wallet app: Saify.
          </p>
        </div>
      </div>
  );
}
