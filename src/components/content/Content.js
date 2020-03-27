import React from 'react';
import './Content.css';
import Sidebar from '../sidebar/Sidebar';
import { sideTab } from '../../static/tabs';
import Map from '../map/Map'
class Content extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { activeTab: sideTab[0]['label'], searchText: sideTab[0]['name'] };
    }
    handleClick(e) {
        let tabLabel = e.target.getAttribute('value');
        let searchText = e.target.innerHTML;
        this.setState({ activeTab: tabLabel, searchText: searchText });


    }


    render() {
        const activeTab = this.state.activeTab;
        let searchText = this.state.searchText;
        return (
            <>
                <Sidebar onClick={this.handleClick} tab={sideTab} active={activeTab} />
                <Map latitude={this.props.latitude} longitude={this.props.longitude} searchtext={searchText} />
            </>
        );
    }
}

export default Content;