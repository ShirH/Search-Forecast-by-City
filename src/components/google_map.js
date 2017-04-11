import React, {Component} from 'react';

class GoogleMap extends Component {
    componentDidMount() { // called once the component is actually mounted to the DOM. But not, every time the component is rendered
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }

    render() {
        return <div ref="map"/>; // ref system in react= allows to get direct reference to an HTML element that been render to the page by referring to: this.refs.map
    }
}

export default GoogleMap;