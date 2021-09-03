import React from "react";
import "./ContentMarketplacePopular.css";
import Slider from "react-slick";
import ContentMarketplaceBlock from "../ContentMarketplaceBlock/ContentMarketplaceBlock";

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

const ContentMarketplacePopular = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        rows: 1,
        slidesPerRow: 1,
        arrows: true,
        autoplay: false,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
        ],
    };

    return (
        <div className="content_marketplace_popular">
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
                <h4>Popular Content</h4>
                <div className="content_marketplace_popular_main">
                    <Slider {...settings}>
                        <ContentMarketplaceBlock />
                        <ContentMarketplaceBlock />
                        <ContentMarketplaceBlock />
                        <ContentMarketplaceBlock />
                        <ContentMarketplaceBlock />
                    </Slider>

                </div>
            </div>
        </div>
    );
};

export default ContentMarketplacePopular;
