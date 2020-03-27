import React from 'react'
import './Map.css'

const mapStyles = {
    width: '100%',
    height: '100%'
};
class MapContainer extends React.Component {
    map; infowindow;

    componentDidMount() {
        if (window.google) {
            const myCurrentLocation = new window.google.maps.LatLng(this.props.latitude, this.props.latitude);
            this.map = new window.google.maps.Map(
                document.getElementById('map'), { center: myCurrentLocation, zoom: 10 });
            this.infowindow = new window.google.maps.InfoWindow();
        }

    }

    componentDidUpdate() {
        if (window.google) {
            const request = {
                query: this.props.searchtext,
                fields: ['name', 'geometry'],
            };
            const service = new window.google.maps.places.PlacesService(this.map);
            // console.log(this);
            const self = this;
            service.findPlaceFromQuery(request, function (results, status) {
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        self.createMarker(results[i]);
                    }

                    self.map.setCenter(results[0].geometry.location);
                }
            });
        }
    }

    createMarker(place) {
        const self = this;
        var marker = new window.google.maps.Marker({
            map: self.map,
            position: place.geometry.location
        });

        window.google.maps.event.addListener(marker, 'click', function () {
            self.infowindow.setContent(place.name);
            self.infowindow.open(this.map, this);
        });
    }

    render() {
        return (
            <div className="map">
                <div id="map" style={mapStyles}></div>
            </div>
        );
    }
}

export default MapContainer;