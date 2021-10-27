import React from 'react';
import { useSelector } from 'react-redux';
import ContentMarketplaceHeader from '../components/ContentMarketplace/MarketplaceHeader/NftMarketplaceHeader';
import MarketplaceSlider from '../components/ContentMarketplace/MarketplaceSlider/MarketplaceSlider';
import MarketplaceMain from '../components/ContentMarketplace/MarketplaceMain/MarketplaceMain';

const featured = [
  {
    img: ['../../img/home_explore/1.png'],
    isAuction: true,
    fullImage: ['../../img/home_explore/f1.jpg']
  },
  {
    img: ['../../img/home_explore/2.png'],
    isSold: true,
    fullImage: ['../../img/home_explore/f2.jpg']
  },
  {
    img: ['../../img/home_explore/3.png'],
    isAuction: true,
    fullImage: ['../../img/home_explore/f3.jpg']
  },
  {
    img: ['../../img/home_explore/4.png'],
    fullImage: ['../../img/home_explore/f4.jpg']
  },
  {
    img: ['../../img/home_explore/5.png'],
    fullImage: ['../../img/home_explore/f5.jpg'],
    isAuction: true
  },
  {
    img: ['../../img/home_explore/6.png'],
    isSold: true,
    fullImage: ['../../img/home_explore/f6.jpg']
  },
  {
    img: ['../../img/home_explore/7.png', '../../img/home_explore/3.png'],
    isBunding: true,
    fullImage: [
      '../../img/home_explore/f7.jpg',
      '../../img/home_explore/f3.jpg'
    ]
  },
  {
    img: ['../../img/home_explore/8.png'],
    fullImage: ['../../img/home_explore/f8.jpg']
  }
];

const popular = [
  {
    img: ['../../img/top_bids_home/1.png'],
    fullImage: ['../../img/top_bids_home/f1.jpg']
  },
  {
    img: ['../../img/top_bids_home/2.png'],
    fullImage: ['../../img/top_bids_home/f2.jpg']
  },
  {
    img: ['../../img/top_bids_home/3.png'],
    fullImage: ['../../img/top_bids_home/f3.jpg']
  },
  {
    img: ['../../img/top_bids_home/4.png'],
    fullImage: ['../../img/top_bids_home/f4.jpg']
  },
  {
    img: ['../../img/top_bids_home/1.png'],
    fullImage: ['../../img/top_bids_home/f1.jpg']
  },
  {
    img: ['../../img/top_bids_home/2.png'],
    fullImage: ['../../img/top_bids_home/f2.jpg']
  },
  {
    img: ['../../img/top_bids_home/3.png'],
    fullImage: ['../../img/top_bids_home/f3.jpg']
  },
  {
    img: ['../../img/top_bids_home/4.png'],
    fullImage: ['../../img/top_bids_home/f4.jpg']
  }
];

const nft = [
  {
    img: ['../../img/home_explore/1.png'],
    isAuction: true,
    fullImage: ['../../img/home_explore/f1.jpg']
  },
  {
    img: ['../../img/home_explore/2.png'],
    isSold: true,
    fullImage: ['../../img/home_explore/f2.jpg']
  },
  {
    img: ['../../img/home_explore/3.png'],
    isAuction: true,
    fullImage: ['../../img/home_explore/f3.jpg']
  },
  {
    img: ['../../img/home_explore/4.png'],
    fullImage: ['../../img/home_explore/f4.jpg']
  },
  {
    img: ['../../img/home_explore/5.png'],
    fullImage: ['../../img/home_explore/f5.jpg'],
    isAuction: true
  },
  {
    img: ['../../img/home_explore/6.png'],
    isSold: true,
    fullImage: ['../../img/home_explore/f6.jpg']
  },
  {
    img: ['../../img/home_explore/7.png', '../../img/home_explore/3.png'],
    isBunding: true,
    fullImage: [
      '../../img/home_explore/f7.jpg',
      '../../img/home_explore/f3.jpg'
    ]
  },
  {
    img: ['../../img/home_explore/8.png'],
    fullImage: ['../../img/home_explore/f8.jpg']
  },
  {
    img: ['../../img/home_explore/9.png'],
    fullImage: ['../../img/home_explore/f9.jpg']
  },
  {
    img: [
      '../../img/home_explore/10.png',
      '../../img/home_explore/2.png',
      '../../img/home_explore/3.png'
    ],
    isBunding: true,
    fullImage: [
      '../../img/home_explore/f10.jpg',
      '../../img/home_explore/f2.jpg',
      '../../img/home_explore/f3.jpg'
    ],
    isAuction: true
  },
  {
    img: ['../../img/home_explore/11.png'],
    fullImage: ['../../img/home_explore/f11.jpg']
  },
  {
    img: ['../../img/home_explore/6.png'],
    isSold: true,
    fullImage: ['../../img/home_explore/f6.jpg']
  },
  {
    img: ['../../img/home_explore/7.png'],
    fullImage: ['../../img/home_explore/f7.jpg']
  },
  {
    img: ['../../img/home_explore/9.png'],
    fullImage: ['../../img/home_explore/f9.jpg']
  },
  {
    img: ['../../img/home_explore/6.png'],
    fullImage: ['../../img/home_explore/f6.jpg']
  },
  {
    img: ['../../img/home_explore/16.jpg'],
    fullImage: ['../../img/home_explore/f16.jpg']
  }
];

const NftMarketplace = (props) => {
  const darkTheme = useSelector((state) => state.app.darkTheme);
  const { closeNftCollapse } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="marketplace nft_marketplace">
        <ContentMarketplaceHeader darkTheme={darkTheme} />
        <MarketplaceSlider
          title={'Featured NFT'}
          rows={2}
          products={featured}
        />
        <MarketplaceSlider title={'Popular NFT'} rows={1} products={popular} />
        <MarketplaceMain title={'NFT Marketplace'} products={nft} />
      </div>
    </React.Fragment>
  );
};

export default NftMarketplace;
