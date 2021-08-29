import React from 'react';
import SoonPopup from '../components/SoonPopup/Popup';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            showSoonPopup: false
        }
        this.togglePopup = this.togglePopup.bind(this);
        this.toggleSoonPopup = this.toggleSoonPopup.bind(this);

    };

    togglePopup() {
        this.setState({ showPopup: !this.state.showPopup });
    }

    toggleSoonPopup() {
        this.setState({ showSoonPopup: !this.state.showSoonPopup });
    }


    render() {
        return (
            <React.Fragment>
                <SoonPopup showPopup={this.state.showSoonPopup}
                    togglePopup={this.toggleSoonPopup} />
            </React.Fragment>
        )
    }
}

export default Main;
