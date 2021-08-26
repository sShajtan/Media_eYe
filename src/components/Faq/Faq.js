import React from 'react';
import './Faq.css';
import WOW from 'wowjs';

class Faq extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            question_1: false,
            question_2: false,
            question_3: false,
            question_4: false,
            question_5: false,
            question_6: false,
            question_7: false,
            question_8: false,
            question_9: false,
            question_10: false,
        };
    }




    render() {
        return (
            <div className="faq">
                <div className="container">
                    <img className="title  animate__animated animate__fadeIn wow" data-wow-duration="1s" data-wow-delay="0.5s" src="img/faq_title.png" />
                    <div className="faq_main">
                        <div className={this.state.question_1 ? "faq_block animate__animated animate__fadeIn wow active" : "faq_block animate__animated animate__fadeIn wow"} data-wow-duration="1s" data-wow-delay="1s">
                            <div onClick={() =>
                                this.setState({ question_1: !this.state.question_1 })
                            }>
                                <h5>What is an NFT?</h5> <strong className={this.state.question_1 ? 'active' : null} >
                                    &#10095;</strong>
                            </div>
                            <span className={this.state.question_1 ? "active" : null}>A non-fungible token (NFT) is a unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable.  NFTs can be used to represent items such as photos, videos, audio, and other types of digital files.</span>
                        </div>
                        <div className={this.state.question_2 ? "faq_block animate__animated animate__fadeIn wow active" : "faq_block animate__animated animate__fadeIn wow"} data-wow-duration="1s" data-wow-delay="1.2s">
                            <div onClick={() =>
                                this.setState({ question_2: !this.state.question_2 })
                            }>
                                <h5>Can I create an NFT on Media eYe without putting it on sale? </h5><strong className={this.state.question_2 ? 'active' : null} >
                                    &#10095;</strong>
                            </div>
                            <span className={this.state.question_2 ? "active" : null}>Yes, you can and it is up to you if you decide to sell it later or not.</span>
                        </div>
                        <div className={this.state.question_3 ? "faq_block animate__animated animate__fadeIn wow active" : "faq_block animate__animated animate__fadeIn wow"} data-wow-duration="1s" data-wow-delay="1.4s">
                            <div onClick={() =>
                                this.setState({ question_3: !this.state.question_3 })
                            }>
                                <h5>Can I gift or send a collectible to someone?</h5><strong className={this.state.question_3 ? 'active' : null} >
                                    &#10095;</strong>
                            </div>
                            <span className={this.state.question_3 ? "active" : null}>Yes, you can and its up to you if you decide to sell it later or not, you can also send multiple NFTs or a series of NFTs using the campaign launcher as part of a unique subscription service we offer.  You can send an NFT to as many people as you wish on Ethereum or Binance Smart Chain, just choose the subscription service that suits you and begin your amazing journey with using using MeDIA eYe NFT Portal.</span>
                        </div>
                        <div className={this.state.question_4 ? "faq_block animate__animated animate__fadeIn wow active" : "faq_block animate__animated animate__fadeIn wow"} data-wow-duration="1s" data-wow-delay="1.6s">
                            <div onClick={() =>
                                this.setState({ question_4: !this.state.question_4 })
                            }>
                                <h5>Can I change the price of an already created collectible?</h5><strong className={this.state.question_4 ? 'active' : null} >
                                    &#10095;</strong>
                            </div>
                            <span className={this.state.question_4 ? "active" : null}>Absolutely, you can lower the price free of transaction costs at any time. You just need to sign the signature request via your wallet.</span>
                        </div>

                        <div className={this.state.question_6 ? "faq_block animate__animated animate__fadeIn wow active" : "faq_block animate__animated animate__fadeIn wow"} data-wow-duration="1s" data-wow-delay="1.8s">
                            <div onClick={() =>
                                this.setState({ question_6: !this.state.question_6 })
                            }>
                                <h5>What is Moderation of Content? </h5><strong className={this.state.question_6 ? 'active' : null} >
                                    &#10095;</strong>
                            </div>
                            <span className={this.state.question_6 ? "active" : null}>You are able to upload your own digital content, to keep our platform safe, friendly and protect users from malicious content, we moderate all content that is uploaded to the MeDIA eYe Platform.  We ensure a great experience for all our users, while providing great environment to create, promote, collect, buy, sell, gift, entertain and earn.</span>
                        </div>
                        <div className={this.state.question_7 ? "faq_block animate__animated animate__fadeIn wow active" : "faq_block animate__animated animate__fadeIn wow"} data-wow-duration="1s" data-wow-delay="2.0s">
                            <div onClick={() =>
                                this.setState({ question_7: !this.state.question_7 })
                            }>
                                <h5>Can I buy, sell and launch NFTs that were not created on the MeDIA eYe NFT Portal?</h5><strong className={this.state.question_7 ? 'active' : null} >
                                    &#10095;</strong>
                            </div>
                            <span className={this.state.question_7 ? "active" : null}>Yes, you can perform the same tasks and activities with NFTs created on other platforms, just choose the subscription service you prefer to truly unlock the potential of MeDIA eYe NFT Portal for your personal or business needs.</span>
                        </div>
                        <div className={this.state.question_8 ? "faq_block animate__animated animate__fadeIn wow active" : "faq_block animate__animated animate__fadeIn wow"} data-wow-duration="1s" data-wow-delay="2.2s">
                            <div onClick={() =>
                                this.setState({ question_8: !this.state.question_8 })
                            }>
                                <h5>Can I sign up with Google or Facebook, and do I need to have a DeFi wallet to do it?</h5><strong className={this.state.question_8 ? 'active' : null} >
                                    &#10095;</strong>
                            </div>
                            <span className={this.state.question_8 ? "active" : null}>Yes, you can easily sign up and create your account using Google or Facebook, when the account is created it will come with your unique wallet address and keys.    You can also sign up using a DeFi wallet, which would then be registered as your unique address on the MeDIA eYe NFT Portal as part of your user account on the platform.</span>
                        </div>
                        <div className={this.state.question_9 ? "faq_block animate__animated animate__fadeIn wow active" : "faq_block animate__animated animate__fadeIn wow"} data-wow-duration="1s" data-wow-delay="2.4s">
                            <div onClick={() =>
                                this.setState({ question_9: !this.state.question_9 })
                            }>
                                <h5>Can  I choose how I store my NFT content files and metadata?</h5><strong className={this.state.question_9 ? 'active' : null} >
                                    &#10095;</strong>
                            </div>
                            <span className={this.state.question_9 ? "active" : null}>Yes, you can choose either to store your data on IPFS distributed storage which is always free or to create storage of your NFT content and metadata on the blockchain, for example on Filecoin, in turn ensuring that your content and data are immutable, please refer to rate sheet for charges associate with storage on the blockchain.   These options are available in your user account to choose from.</span>
                        </div>
                        <div className={this.state.question_10 ? "faq_block animate__animated animate__fadeIn wow active" : "faq_block animate__animated animate__fadeIn wow"} data-wow-duration="1s" data-wow-delay="2.6s">
                            <div onClick={() =>
                                this.setState({ question_10: !this.state.question_10 })
                            }>
                                <h5>Can I on board FIAT currency to the MeDIA eYe NFT Portal and use it buy NFTs?</h5><strong className={this.state.question_9 ? 'active' : null} >
                                    &#10095;</strong>
                            </div>
                            <span className={this.state.question_10 ? "active" : null}>You can onboard approved FIAT currencies on to the platform using our unique On-Ramp service and then purchase the relevant crypto assets which will be transferred to your user account wallet, its that simple and your are ready to start using MeDIA eYe..</span>
                        </div>
                    </div>

                </div>
            </div >
        )
    }
}

export default Faq;
