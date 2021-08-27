import React from 'react';
import './App.css';
import './fonts/Poppins/stylesheet.css';
import './fonts/Roboto/stylesheet.css';
import './fonts/neumatic/stylesheet.css';
import Main from './pages/Main';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      darkTheme: true
    };
  }

  toggleTheme = () => {
    this.setState({ darkTheme: !this.state.darkTheme })
  }

  render() {
    return (
      <div className={this.state.darkTheme ? 'App dark' : 'App'} >
        <Main toggleTheme={this.toggleTheme} theme={this.state.darkTheme} />
      </div>
    );
  }


}

export default App;


