import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'

class ListMap extends Component {
    constructor (props) {
        super(props)
    }
    static defaultProps = {
        center: {
            lat: 40.463667,
            lng: -3.74922
        },
        zoom: 6
    }

    render() {
        return (
            <div style={{ height: '650px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'API' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    {this.props.users.map(elm => <Marker
                        lat={elm.location.coordinates[0]}
                        lng={elm.location.coordinates[1]}
                        name={elm.username}
                        id={elm._id}
                        instrument={elm.instrument}
                    />)}
                    
                </GoogleMapReact>
            </div>
        );
    }
}

export default ListMap;
