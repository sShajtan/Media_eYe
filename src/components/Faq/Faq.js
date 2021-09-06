import React, { useState } from "react";
import "./Faq.css";

const Faq = () => {
  const [question_1, setQuestion_1] = useState(false);
  const [question_2, setQuestion_2] = useState(false);
  const [question_3, setQuestion_3] = useState(false);
  const [question_4, setQuestion_4] = useState(false);
  const [question_6, setQuestion_6] = useState(false);
  const [question_7, setQuestion_7] = useState(false);
  const [question_8, setQuestion_8] = useState(false);
  const [question_9, setQuestion_9] = useState(false);
  const [question_10, setQuestion_10] = useState(false);

  return (
    <div className="faq" id="faq">
      <div className="faq_wrapper">
        <div className="container">
          <img
            alt="FAQ"
            className="title  animate__animated animate__fadeIn wow"
            data-wow-duration="1s"
            data-wow-delay="0.5s"
            src="img/faq_title.png"
          />
          <div className="faq_main">
            <div
              className={
                question_1
                  ? "faq_block animate__animated animate__fadeIn wow active"
                  : "faq_block animate__animated animate__fadeIn wow"
              }
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <div onClick={() => setQuestion_1(!question_1)}>
                <h5>What is an NFT?</h5>{" "}
                <strong className={question_1 ? "active" : null}>&#10095;</strong>
              </div>
              <span className={question_1 ? "active" : null}>
                A non-fungible token (NFT) is a unit of data stored on a digital
                ledger, called a blockchain, that certifies a digital asset to be
                unique and therefore not interchangeable. NFTs can be used to
                represent items such as photos, videos, audio, and other types of
                digital files.
              </span>
            </div>
            <div
              className={
                question_2
                  ? "faq_block animate__animated animate__fadeIn wow active"
                  : "faq_block animate__animated animate__fadeIn wow"
              }
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <div onClick={() => setQuestion_2(!question_2)}>
                <h5>
                  Can I create an NFT on MeDIA eYe without putting it on sale?{" "}
                </h5>
                <strong className={question_2 ? "active" : null}>&#10095;</strong>
              </div>
              <span className={question_2 ? "active" : null}>
                Yes, you can and it is up to you if you decide to sell it later or
                not.
              </span>
            </div>
            <div
              className={
                question_3
                  ? "faq_block animate__animated animate__fadeIn wow active"
                  : "faq_block animate__animated animate__fadeIn wow"
              }
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <div onClick={() => setQuestion_3(!question_3)}>
                <h5>Can I gift or send a collectible to someone?</h5>
                <strong className={question_3 ? "active" : null}>&#10095;</strong>
              </div>
              <span className={question_3 ? "active" : null}>
                Yes, you can and its up to you if you decide to sell it later or not. You can also send multiple NFTs or a series of NFTs using the campaign launcher as part of a unique subscription service we offer. You can send an NFT to as many people as you wish on
                Ethereum or Binance Smart Chain, just choose the subscription
                service that suits you and begin your amazing journey with using
                MeDIA eYe NFT Portal.
              </span>
            </div>
            <div
              className={
                question_4
                  ? "faq_block animate__animated animate__fadeIn wow active"
                  : "faq_block animate__animated animate__fadeIn wow"
              }
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <div onClick={() => setQuestion_4(!question_4)}>
                <h5>Can I change the price of an already created collectible?</h5>
                <strong className={question_4 ? "active" : null}>&#10095;</strong>
              </div>
              <span className={question_4 ? "active" : null}>
                Absolutely, you can lower the price free of transaction costs at
                any time. You just need to sign the signature request via your
                wallet.
              </span>
            </div>
            <div
              className={
                question_6
                  ? "faq_block animate__animated animate__fadeIn wow active"
                  : "faq_block animate__animated animate__fadeIn wow"
              }
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <div onClick={() => setQuestion_6(!question_6)}>
                <h5>What is Moderation of Content?</h5>
                <strong className={question_6 ? "active" : null}>&#10095;</strong>
              </div>
              <span className={question_6 ? "active" : null}>
                To keep our platform safe, friendly and protect users, we moderate all content that is uploaded to the MeDIA eYe Platform. We ensure a great experience for all our users, while
                providing a safe environment to create, promote, collect, buy,
                sell, gift, entertain and earn.
              </span>
            </div>
            <div
              className={
                question_7
                  ? "faq_block animate__animated animate__fadeIn wow active"
                  : "faq_block animate__animated animate__fadeIn wow"
              }
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <div onClick={() => setQuestion_7(!question_7)}>
                <h5>
                  Can I buy, sell and launch NFTs that were not created on the
                  MeDIA eYe NFT Portal?
                </h5>
                <strong className={question_7 ? "active" : null}>&#10095;</strong>
              </div>
              <span className={question_7 ? "active" : null}>
                Yes, you can perform the same tasks and activities with NFTs
                created on other platforms, just choose the subscription service
                you prefer to truly unlock the potential of MeDIA eYe NFT Portal
                for your personal or business needs.
              </span>
            </div>
            <div
              className={
                question_8
                  ? "faq_block animate__animated animate__fadeIn wow active"
                  : "faq_block animate__animated animate__fadeIn wow"
              }
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <div onClick={() => setQuestion_8(!question_8)}>
                <h5>
                  Can I sign up with Google or Facebook, and do I need to have a
                  DeFi wallet to do it?
                </h5>
                <strong className={question_8 ? "active" : null}>&#10095;</strong>
              </div>
              <span className={question_8 ? "active" : null}>
                Yes, you can easily sign up and create your account using Google
                or Facebook, when the account is created it will come with your
                unique wallet address and keys. You can also sign up using a DeFi
                wallet, which would then be registered as your unique address on
                the MeDIA eYe NFT Portal as part of your user account on the
                platform.
              </span>
            </div>
            <div
              className={
                question_9
                  ? "faq_block animate__animated animate__fadeIn wow active"
                  : "faq_block animate__animated animate__fadeIn wow"
              }
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <div onClick={() => setQuestion_9(!question_9)}>
                <h5>
                  Can I choose how I store my NFT content files and metadata?
                </h5>
                <strong className={question_9 ? "active" : null}>&#10095;</strong>
              </div>
              <span className={question_9 ? "active" : null}>
                Yes, you can choose either to store your data on IPFS distributed storage, which is always free, or to create storage of your NFT content and metadata on the blockchain. This ensures your content and data are immutable. Please refer to the rate sheet for charges associated with storage on the blockchain. These options are available to choose from in your user account.
              </span>
            </div>
            <div
              className={
                question_10
                  ? "faq_block animate__animated animate__fadeIn wow active"
                  : "faq_block animate__animated animate__fadeIn wow"
              }
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <div onClick={() => setQuestion_10(!question_10)}>
                <h5>
                  Can I onboard FIAT currency to the MeDIA eYe NFT Portal and use it to buy NFTs?
                </h5>
                <strong className={question_10 ? "active" : null}>
                  &#10095;
                </strong>
              </div>
              <span className={question_10 ? "active" : null}>
                You can onboard approved FIAT currencies to the platform using our on-ramp service and then purchase the relevant crypto assets.  Purchased assets will be transferred to your user account wallet. It is that simple and now you're ready to start using MeDIA eYe.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;