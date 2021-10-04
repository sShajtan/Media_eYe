import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Web3ReactProvider } from '@web3-react/core';
import { useSelector, useDispatch } from 'react-redux';
import Main from './pages/Main';
import Header from './components/Header/Header';
import TimerPopup from './components/TimerPopup/Popup';
import RegisterPopup from './components/RegisterPopup/Popup';
import BusinessPopup from './components/BusinessPopup/Popup';
import SoonPopup from './components/SoonPopup/Popup';
import PartnersPopup from './components/PartnersPopup/Popup';
import Footer from './components/Footer/Footer';
import NoMatch from './pages/NoMatch';
import Gallery from './pages/Gallery';
import Creators from './pages/Creators';
import './App.css';
import './fonts/Poppins/stylesheet.css';
import './fonts/Rambla/stylesheet.css';
import './fonts/Roboto/stylesheet.css';
import './fonts/neumatic/stylesheet.css';
import { updateTimerPopup, updateRegisterPopup } from './store/app/appSlice';
import MessagePopup from './components/MessagePopup/MessagePopup';
import ContentMarketplace from './pages/ContentMarketplace';
import NftMarketplace from './pages/NftMarketplace';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import ConnectWallet from './pages/ConnectWallet';
import Feature from './pages/SelectFeature';
import CreatorAccount from './pages/CreatorAccount';
import Product from './pages/Product';
import ProductAuction from './components/ProductCard/ProductAuction/ProductAuction';
import CreateProduct from './pages/CreateProduct';
import CreateSingleProduct from './pages/CreateSingleProduct';
import Collection from './pages/CreateCollectionProduct';
import Profile from './pages/Profile';
import ProfileWallet from './pages/ProfileWallet';
import ProfileSettings from './pages/ProfileSettings';
import ProfileSupport from './pages/ProfileSupport';
import ProfileSubscription from './pages/ProfileSubscription';
import Canvas from './pages/Canvas';
import Basket from './pages/Bsaket';
import { getLibrary } from './utils/web3';
import CreatorAccountCollections from './pages/AccountCollections';
import AccountMainted from './pages/AccountMainted';
import AccountPurchased from './pages/AccountPurchased';
import AccountFavorites from './pages/AccountFavorites';
import AccountCampaign from './pages/AccountCampaign';
import AccountCurrently from './pages/AccountCurrently'; 
import SingleCollection from './components/Account/SingleCollection/SingleCollection';
import SingleCreator from './components/Account/SingleCreator/SingleCreator';
import AccountContent from './pages/AccountContent';

const App = () => {
  const darkTheme = useSelector((state) => state.app.darkTheme);
  const timerPopup = useSelector((state) => state.app.timerPopup);
  const registerPopup = useSelector((state) => state.app.registerPopup);
  const [showSoonPopup, setShowSoonPopup] = useState(false);
  const [showBusinessPopup, setShowBusinessPopup] = useState(false);
  const [showPartnersPopup, setShowPartnersPopup] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const [showMessagePopup, setshowMessagePopup] = useState(false);
  const [showNftCollapse, setShowNftCollpase] = useState(false);
  const [showWalletCollapse, setShowWalletCollapse] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (timerPopup === false && showRegisterPopup === true) {
      dispatch(updateTimerPopup());
      setTimeout(() => {
        setShowPopup(true);
      }, 140000000);
    }
  });

  useEffect(()=>{
    if (registerPopup === false) {
      dispatch(updateRegisterPopup());
      setTimeout(() => {
        setShowRegisterPopup(true);
      }, 70000000);
    }
  })

  const toggleSoonPopup = () => {
    setShowSoonPopup(!showSoonPopup);
  };

  const togglePartnersPopup = () => {
    setShowPartnersPopup(!showPartnersPopup);
  };

  const toggleBusinessPopup = () => {
    setShowBusinessPopup(!showBusinessPopup);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

   const toggleRegisterPopup = () => {
    setShowRegisterPopup(!showRegisterPopup);
  };

  const toggleNftCollapse = () => {
    setShowNftCollpase(!showNftCollapse);
  };

  const toggleMessagePopup = () => {
    setshowMessagePopup(!showMessagePopup);
  };

  const closeNftCollapse = () => {
    setShowNftCollpase(false);
    setShowWalletCollapse(false);
  };

  const toggleWalletCollapse = () => {
    setShowWalletCollapse(!showWalletCollapse);
  };

  return (
    <Router>
      <Web3ReactProvider getLibrary={getLibrary}>
        <div className={darkTheme ? 'App dark' : 'App'}>
          <SoonPopup showPopup={showSoonPopup} togglePopup={toggleSoonPopup} />
          <PartnersPopup
            showPopup={showPartnersPopup}
            togglePopup={togglePartnersPopup}
            toggleMessagePopup={toggleMessagePopup}
          />
          <TimerPopup
            showPopup={showPopup}
            togglePopup={togglePopup}
            toggleMessagePopup={toggleMessagePopup}
          />
            <RegisterPopup 
          showPopup={showRegisterPopup}
          togglePopup={toggleRegisterPopup}
        />
          <BusinessPopup
            showPopup={showBusinessPopup}
            togglePopup={toggleBusinessPopup}
            toggleMessagePopup={toggleMessagePopup}
          />
          <MessagePopup
            showPopup={showMessagePopup}
            togglePopup={toggleMessagePopup}
          />
          <Header
            toggleSoonPopup={toggleSoonPopup}
            toggleNftCollapse={toggleNftCollapse}
            toggleWalletCollapse={toggleWalletCollapse}
            showNftCollapse={showNftCollapse}
            showWalletCollapse={showWalletCollapse}
          />
          <Switch>
            <Route path="/" exact>
              <Main
                toggleSoonPopup={toggleSoonPopup}
                togglePartnersPopup={togglePartnersPopup}
                toggleBusinessPopup={toggleBusinessPopup}
                togglePopup={togglePopup}
                toggleMessagePopup={toggleMessagePopup}
                toggleNftCollapse={toggleNftCollapse}
                closeNftCollapse={closeNftCollapse}
              />
            </Route>
            <Route path="/content-marketplace" exact>
              <ContentMarketplace
                closeNftCollapse={closeNftCollapse}
              ></ContentMarketplace>
            </Route>
            <Route path="/nft-marketplace" exact>
              <NftMarketplace
                closeNftCollapse={closeNftCollapse}
              ></NftMarketplace>
            </Route>
            <Route path="/signup" exact>
              <SignUp />
            </Route>
            <Route path="/login" exact>
              <LogIn />
            </Route>
            <Route path="/gallery" exact>
              <Gallery closeNftCollapse={closeNftCollapse} />
            </Route>
            <Route path="/creators" exact>
              <Creators closeNftCollapse={closeNftCollapse} />
            </Route>
            <Route path="/creator-account" exact>
              <CreatorAccount closeNftCollapse={closeNftCollapse} />
            </Route>
            <Route path="/connect-wallet" exact>
              <ConnectWallet closeNftCollapse={closeNftCollapse} />
            </Route>
            <Route path="/feature" exact>
              <Feature closeNftCollapse={closeNftCollapse} />
            </Route>
            <Route path="/auction-product" exact>
              <ProductAuction closeNftCollapse={closeNftCollapse} />
            </Route>
            <Route path="/product" exact>
              <Product closeNftCollapse={closeNftCollapse} />
            </Route>
            <Route path="/create" exact>
              <CreateProduct closeNftCollapse={closeNftCollapse} />
            </Route>
            <Route path="/create/single" exact>
              <CreateSingleProduct closeNftCollapse={closeNftCollapse} />
            </Route>
            <Route path="/create/collection" exact>
              <Collection
                closeNftCollapse={closeNftCollapse}
                darkTheme={darkTheme}
              />
            </Route>
            <Route path="/profile/wallet" exact>
              <ProfileWallet closeNftCollapse={closeNftCollapse} />
            </Route>
            <Route path="/profile/settings" exact>
              <ProfileSettings closeNftCollapse={closeNftCollapse} />
            </Route>
            <Route path="/profile/support" exact>
              <ProfileSupport closeNftCollapse={closeNftCollapse} />
            </Route>
            <Route path="/profile/subscription" exact>
              <ProfileSubscription closeNftCollapse={closeNftCollapse} />
            </Route>
            <Route path="/profile" exact>
              <Profile closeNftCollapse={closeNftCollapse} />
            </Route>
            <Route path="/basket" exact>
              <Basket closeNftCollapse={closeNftCollapse} />
            </Route>
             <Route path="/account/collections" exact>
            <CreatorAccountCollections closeNftCollapse={closeNftCollapse} />
          </Route>
           <Route path="/account/collections/collection" exact>
            <SingleCollection closeNftCollapse={closeNftCollapse} />
          </Route>
          <Route path="/account/collections/creator/" exact>
            <SingleCreator closeNftCollapse={closeNftCollapse} />
          </Route>
          <Route path="/account/minted" exact>
            <AccountMainted closeNftCollapse={closeNftCollapse} />
          </Route>
          <Route path="/account/purchased" exact>
            <AccountPurchased closeNftCollapse={closeNftCollapse} />
          </Route>
          <Route path="/account/campaign" exact>
            <AccountCampaign closeNftCollapse={closeNftCollapse} />
          </Route>
          <Route path="/account/favorites" exact>
            <AccountFavorites closeNftCollapse={closeNftCollapse} />
          </Route>
          <Route path="/account/currently" exact>
            <AccountCurrently closeNftCollapse={closeNftCollapse} />
          </Route>
          <Route path="/account/content" exact>
            <AccountContent closeNftCollapse={closeNftCollapse} />
          </Route>
            <Route path="/theOne/canvas" exact>
              <Canvas closeNftCollapse={closeNftCollapse} />
            </Route>
            <Route path="*">
              <NoMatch onClick={closeNftCollapse} />
            </Route>
          </Switch>
          <Footer toggleSoonPopup={toggleSoonPopup} />
        </div>
      </Web3ReactProvider>
    </Router>
  );
};

export default App;
