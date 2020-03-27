import React from 'react';
import { getLocation } from './common/helper';
import Header from './components/header/Header'
import Content from './components/content/Content'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { latitude: '', longitude: '' };
    getLocation()
      .then((data) => {
        this.setState({ latitude: data.coords.latitude, longitude: data.coords.longitude });
      })
      .catch((error) => console.log(error));
  }
  render() {
    const coords = this.state;
    return (
      <>
        <Header latitude={coords.latitude} longitude={coords.longitude} />
        <Content latitude={coords.latitude} longitude={coords.longitude} />

      </>
    )
  }
}

export default App;
