import React from 'react';
import './MainHow.css';

class MainHow extends React.Component {
    render() {
        return (
            <div className="main_how">
                <div className="container">
                    <h3 className="block_title">HOW IT WORKS</h3>
                    <div className="main_how_main">
                        <div className="main_how_block">
                            <div>
                                <h2 className="animate__animated animate__fadeInLeft wow" data-wow-duration="1.5s" data-wow-delay="1s">Create</h2>
                                <p className="animate__animated animate__fadeInLeft wow" data-wow-duration="1.5s" data-wow-delay="1s">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            </div>
                            <div className="main_how_block_img">
                                <img className="animate__animated animate__zoomIn wow" data-wow-duration="1.5s" data-wow-delay="1s" src="img/main_how/1.png" />
                            </div>
                        </div>
                        <div className="main_how_block">
                            <div className="main_how_block_img">
                                <img className="animate__animated animate__zoomIn wow" data-wow-duration="1.5s" data-wow-delay="1s" src="img/main_how/2.png" />
                            </div>
                            <div>
                                <h2 className="animate__animated animate__fadeInRight wow" data-wow-duration="1.5s" data-wow-delay="1s">Promote</h2>
                                <p className="animate__animated animate__fadeInRight wow" data-wow-duration="1.5s" data-wow-delay="1s">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            </div>
                        </div>
                        <div className="main_how_block">
                            <div>
                                <h2 className="animate__animated animate__fadeInLeft wow" data-wow-duration="1.5s" data-wow-delay="1s">Collect</h2>
                                <p className="animate__animated animate__fadeInLeft wow" data-wow-duration="1.5s" data-wow-delay="1s">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            </div>
                            <div className="main_how_block_img">
                                <img className="animate__animated animate__zoomIn wow" data-wow-duration="1.5ss" data-wow-delay="1s" src="img/main_how/3.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainHow;
