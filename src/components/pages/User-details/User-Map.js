import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from '../Users-list/Marker'

class UserMap extends Component {
    constructor(props) {
        super(props)
    }
    static defaultProps = {
        
        zoom: 8
    }

    render() {
        return (
            <div style={{ height: '400px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'API' }}
                    defaultCenter={{
                        lat: this.props.user.location.coordinates[0],
                        lng: this.props.user.location.coordinates[1]
        }}
                    defaultZoom={this.props.zoom}
                >
                    <Marker lat={this.props.user.location.coordinates[0]} lng={this.props.user.location.coordinates[1]} name={this.props.user.name} id={this.props.user._id} instrument={this.props.user.instrument}/>

                </GoogleMapReact>
            </div>
        );
    }
}

export default UserMap;
