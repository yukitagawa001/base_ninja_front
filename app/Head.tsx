import React from 'react';
import Head from 'next/head';

export const CustomHead = () => {
    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Base Ninja NFT</title>

            {/* Chakra Petch Font */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&display=swap"
                rel="stylesheet"
            />

            <style>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    font-family: 'Chakra Petch', sans-serif;
                    background-color: #fff;
                    color: #fff;
                }

                .container {
                    position: relative;
                    width: 100%;
                    max-width: 100%;
                    margin: 0 auto;
                    overflow: hidden;
                }

                .device-info {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    background-color: #f0f0f0;
                    color: #333;
                    text-align: center;
                    padding: 5px;
                    font-size: 12px;
                    z-index: 100;
                }

                .wallet-page {
                    position: relative;
                    width: 100%;
                    min-height: 100vh;
                    background-color: #8B4513;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                }

                .title {
                    font-size: 24px;
                    font-weight: 700;
                    line-height: 1.2;
                    margin-top: 20px;
                    margin-bottom: 20px;
                }

                .button-container {
                    position: relative;
                    width: 120px;
                    height: 30px;
                    cursor: pointer;
                    background: none;
                    border: none;
                    padding: 0;
                }

                .button-img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }

                .character-container {
                    position: absolute;
                    bottom: 100px;
                    right: 10px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .ninja-cat {
                    width: 120px;
                    height: auto;
                }

                .only-badge {
                    width: 50px;
                    height: auto;
                    margin-top: 10px;
                }

                .description {
                    position: absolute;
                    bottom: 60px;
                    left: 20px;
                    right: 20px;
                    font-size: 12px;
                    line-height: 1.4;
                }

                .browser-bar {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 40px;
                    background-color: #f0f0f0;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 10px;
                    color: #333;
                }

                .browser-url {
                    background-color: #e0e0e0;
                    padding: 4px 10px;
                    border-radius: 12px;
                    font-size: 12px;
                }

                .browser-button {
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #666;
                }

                /* Responsive Design */
                @media (max-width: 374px) {
                    .title {
                        font-size: 22px;
                    }

                    .button-container {
                        width: 110px;
                        height: 28px;
                    }

                    .character-container {
                        bottom: 90px;
                        right: 5px;
                    }

                    .ninja-cat {
                        width: 100px;
                    }

                    .only-badge {
                        width: 40px;
                    }

                    .description {
                        font-size: 10px;
                        bottom: 50px;
                    }
                }

                @media (min-width: 375px) and (max-width: 429px) {
                    .title {
                        font-size: 24px;
                    }

                    .button-container {
                        width: 120px;
                        height: 30px;
                    }

                    .character-container {
                        bottom: 100px;
                        right: 10px;
                    }

                    .ninja-cat {
                        width: 120px;
                    }
                }

                @media (min-width: 430px) and (max-width: 767px) {
                    .title {
                        font-size: 26px;
                    }

                    .button-container {
                        width: 130px;
                        height: 32px;
                    }

                    .character-container {
                        bottom: 110px;
                        right: 15px;
                    }

                    .ninja-cat {
                        width: 140px;
                    }

                    .only-badge {
                        width: 45px;
                    }

                    .description {
                        font-size: 12px;
                        bottom: 60px;
                    }

                    .browser-bar {
                        height: 45px;
                    }
                }

                @media (min-width: 768px) {
                    .title {
                        font-size: 32px;
                        margin-top: 30px;
                        margin-bottom: 30px;
                    }

                    .button-container {
                        width: 150px;
                        height: 36px;
                    }

                    .character-container {
                        bottom: 140px;
                        right: 30px;
                    }

                    .ninja-cat {
                        width: 180px;
                    }

                    .only-badge {
                        width: 60px;
                        margin-top: 15px;
                    }

                    .description {
                        font-size: 14px;
                        bottom: 80px;
                        max-width: 60%;
                    }

                    .browser-bar {
                        height: 50px;
                    }

                    .browser-url {
                        font-size: 14px;
                    }
                }
            `}</style>
        </Head>
    );
};

export default CustomHead;