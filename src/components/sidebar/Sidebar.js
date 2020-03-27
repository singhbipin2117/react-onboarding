import React from 'react';

import './Sidebar.css'
class Sidebar extends React.Component {
    render() {
        const activeTab = this.props.active;
        const ulList = this.props.tab.map(item => <li className={activeTab === item.label ? 'active' : ''} key={item.label} value={item.label} onClick={this.props.onClick}>{item.name}</li>);
        return (
            <div className="sidebar">
                <ul>
                    {ulList}
                </ul>
            </div>
        );
    }
}
export default Sidebar;
