import React from 'react';
import './Roadmap.css';

class Roadmap extends React.Component {
    render() {
        return (
            <div className="roadmap">
                <div className="container">
                    <h3 className="block_title">MeDIA <img src="img/eye.png" /> ROADMAP</h3>
                    <div className="roadmap_main">
                        <div className="roadmap_block animate__animated animate__rollIn wow" data-wow-duration="1.5s" data-wow-delay="1s">
                            <h6>Q1/21</h6>
                            <img src="img/line_top.png" className="line" />
                            <span>The MeDIA eYe NFT Creator Portal Concept is developed   </span>
                        </div>
                        <div className="roadmap_block line_bottom animate__animated animate__rollIn wow" data-wow-duration="1.5s" data-wow-delay="1s">
                            <h6>Q2/21</h6>
                            <img src="img/line_top.png" className="line" />
                            <span>The MeDIA eYe NFT Creator Portal Concept is developed   </span>
                        </div>
                        <div className="roadmap_block animate__animated animate__rollIn wow" data-wow-duration="1.5s" data-wow-delay="1s">
                            <h6>Q3/21</h6>
                            <img src="img/line_top.png" className="line" />
                            <span>The MeDIA eYe NFT Creator Portal Concept is developed   </span>
                        </div>
                        <div className="roadmap_block line_bottom animate__animated animate__rollIn wow" data-wow-duration="1.5s" data-wow-delay="1s">
                            <h6>Q4/21</h6>
                            <img src="img/line_top.png" className="line" />
                            <span>The MeDIA eYe NFT Creator Portal Concept is developed   </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Roadmap;
