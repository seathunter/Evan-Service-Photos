import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Axios from 'axios';

import PhotoHeader from './components/PhotoHeader.jsx';
import PhotoGrid from './components/PhotoGrid.jsx';
import PhotoCarousel from './components/PhotoCarousel.jsx';
import SidebarInfo from './components/SidebarInfo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      info: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    const here = this;
    let listing = window.location.pathname.slice(1);
    Axios.get(`/photos/:${listing}`)
      .then(function(allPhotos) {
        console.log(allPhotos);
        const p = allPhotos.data.rows[0];
        const urlArray = [p.urlone, p.urltwo, p.urlthree, p.urlfour, p.urlfive, p.urlsix, p.urlseven, p.urleight, p.urlnine, p.urlten, p.urleleven, p.urltwelve];
        here.setState({
          photos: urlArray,
          isLoading: false,
        });
      })
      .catch(function(err) {
        console.log(err);
      });
    /*
    $.get({
      url: 'http://localhost:3050/photos/',
      dataType: 'json',
      success: allPhotos => { this.setState({ photos: allPhotos, isLoading: false }) },
      error: err => { console.log('Failed..', err) },
    });
    */
  }
  render() {
    if (!this.state.isLoading) {
      return (
        <div>
          <PhotoHeader photos={this.state.photos} />
          <PhotoGrid photos={this.state.photos} />
          <SidebarInfo info={this.state.info} />
        </div>
      );
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('photos'));

export default App;