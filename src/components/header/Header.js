import React from 'react';
import './Header.css';


class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <b>Find Near by</b>
                <ul>
                    <li><b> Latitude : </b>{this.props.latitude}</li>
                    <li><b> Longitude : </b>{this.props.longitude}</li>
                </ul>
            </div>
        );
    }
}

export default Header;