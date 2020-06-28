import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
               {this.props.businessProp.map(businessElem => <Business businessProp2={businessElem} />)}
            </div>
        )
    }
}

export default BusinessList;