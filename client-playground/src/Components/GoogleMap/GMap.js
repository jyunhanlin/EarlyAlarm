import React from 'react';

class GoogleMap extends React.Component {

  constructor(props) {
    super();
    this.initMap = this.initMap.bind(this);
    this.map = React.createRef();
  }
  componentDidMount() {
    // Connect the initMap() function within this class to the global window context,
    // so Google Maps can invoke it
    window.initMap = this.initMap;
    // Asynchronously load the Google Maps script, passing in the callback reference
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyDc1qE45oruxhSzu7R8SD8rPfNqIS7Dkpk&callback=initMap')
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  componentWillUnmount() {
    console.log('gmap will unmount');
  }

  /* eslint-disable */
  initMap() {
    const directionsDisplay = new google.maps.DirectionsRenderer;
    const directionsService = new google.maps.DirectionsService;
    const map = new google.maps.Map(this.map.current, {
      zoom: 6,
      center: {lat: 25.105497, lng: 121.597366}
    });
    directionsDisplay.setMap(map);
    this.calculateAndDisplayRoute(directionsService, directionsDisplay);
  }

  calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
      origin: 'Tagtoo',
      destination: '101',
      travelMode: google.maps.TravelMode['WALKING']
    }, function(response, status) {
      console.log(response);
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        console.log('GG');
      }
    });
  }
  /* eslint-enable */

  render() {
    return (
      <div>
        <div ref={this.map} style={{height: '500px', width: '500px'}}></div>
      </div>
    );
  }
}

function loadJS(src) {
  const ref = window.document.getElementsByTagName("script")[0];
  const script = window.document.createElement("script");
  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);
}


export default GoogleMap;