import React from 'react';
import Down from '../../Icons/down';
import CharitiesSingleBlock from '../CharitiesSingleBlock/CharitiesSingleBlock';
import './CharitiesSingle.css';
import Slider from 'react-slick';
import { useHistory } from 'react-router-dom';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      data-role="none"
      className="slick-arrow slick-next"
      onClick={onClick}
    >
      <span>&#8594;</span>
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      data-role="none"
      className="slick-arrow slick-prev"
      onClick={onClick}
    >
      <span>&#8592;</span>
    </button>
  );
}

const CharitiesSingle = (props) => {
  const { togglePopup } = props;
  let history = useHistory();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2,
    slidesPerRow: 1,
    arrows: true,
    autoplay: false,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          rows: 4
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 574,
        settings: {
          dots: true,
          slidesToShow: 1,
          rows: 1
        }
      }
    ]
  };
  return (
    <div className="charities_single">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <div className="container">
        <div className="charities_single_main">
          <a className="charities_back" onClick={() => history.goBack()}>
            <Down /> Charities
          </a>
          <div className="charities_single_header">
            <div className="charities_single_header_left">
              <div className="charities_single_header_img_wrapper">
                <img src="../../img/charity_img.png" />
              </div>
            </div>
            <div className="charities_single_header_right">
              <div className="charities_single_header_text">
                <h5>PolarisCharitable Trust</h5>
                <br />
                <p>NFT Art & Media Description</p>
                <br />
                <br />
                <p>Tell us about your charitable NFT Art and Media.</p>
              </div>
              <div className="charities_single_header_footer">
                <div>
                  <h6>Total donations</h6>
                  <span>2000 ETH </span>
                </div>
                <button
                  className="charities_single_header_donate"
                  onClick={togglePopup}
                >
                  Donate
                </button>
              </div>
            </div>
          </div>
          <div className="charities_single_text">
            <h3>About Polaris Charitable Trust</h3>
            <p>
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
              sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores eos, qui ratione voluptatem sequi nesciunt, neque porro
              quisquam est, qui dolorem ipsum, quia dolor sit, amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt, ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit, qui in ea
              voluptate velit esse, quam nihil molestiae consequatur, vel illum,
              qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos
              et accusamus et iusto odio dignissimos ducimus, qui blanditiis
              praesentium voluptatum deleniti atque corrupti, quos dolores et
              quas molestias excepturi sint, obcaecati cupiditate non provident,
              similique sunt in culpa, qui officia deserunt mollitia animi, id
              est laborum et dolorum fuga.{' '}
            </p>
            <div className="charities_single_text_info">
              Charity Registration (CC) Number <br />
              <span>CC12345</span>
            </div>
            <div className="charities_single_text_info">
              IRD Number <br />
              <span>123-456-789</span>
            </div>
            <div className="charities_single_text_info">
              Location:
              <span> USA</span>
            </div>
          </div>
          <div className="charities_single_slider">
            <Slider {...settings}>
              <CharitiesSingleBlock isAuction={true} />
              <CharitiesSingleBlock />
              <CharitiesSingleBlock />
              <CharitiesSingleBlock isAuction={true} />
              <CharitiesSingleBlock />
              <CharitiesSingleBlock />
              <CharitiesSingleBlock isAuction={true} />
              <CharitiesSingleBlock />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharitiesSingle;
