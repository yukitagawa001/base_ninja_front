"use client";

import { useEffect, useRef } from "react";
import { useAccount } from "wagmi";
import "./main.css";
import { ConnectKitButton } from "connectkit";
import React from "react";

export default function Home() {
  const { address, isConnected } = useAccount();
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      // 初回レンダリング時は何もせず、フラグを更新
      initialRender.current = false;
      return;
    }

    if (isConnected && address) {
      (async () => {
        try {
          console.log("接続されたアドレス:", address);
          alert("接続中です。");
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
          After acquiring your Base Ninja NFT, you&apos;ll get a special theme for
          crypto wallet app: Saify.
        </p>
      </div>
    </div>
  );
}
