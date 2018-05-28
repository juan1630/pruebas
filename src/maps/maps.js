import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
//import {APIKEY}  from '../config/index';

export class Maps extends Component {

    render(){
        const googleMap = withGoogleMap( props => { 
            <GoogleMap  defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
            defaultZoom = { 13 }>
            </GoogleMap>
          })
        return (<div>
            <googleMap ></googleMap>
        </div>
        );
    }
}

export default Maps;