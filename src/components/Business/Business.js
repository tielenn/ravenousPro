import React from 'react';
import './Business.css';

class Business extends React.Component {
    render() {
        return (
            <div className="Business">
                <div className="image-container">
                    <img src={this.props.businessProp2.imageSrc} alt=''/>
                </div>
                <h2>{this.props.businessProp2.name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <p>{this.props.businessProp2.address}</p>
                        <p>{this.props.businessProp2.city}</p>
                        <p>{this.props.businessProp2.state} {this.props.businessProp2.zipCode}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{this.props.businessProp2.category}</h3>
                        <h3 className="rating">{this.props.businessProp2.rating} stars</h3>
                        <p>{this.props.businessProp2.reviewCount} reviews</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Business;