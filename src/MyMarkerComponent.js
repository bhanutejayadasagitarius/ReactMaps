import React from 'react';

import AnchorLabel from './AnchorLabel';



import { withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';

const { MarkerWithLabel } = require('react-google-maps/lib/components/addons/MarkerWithLabel');
const { InfoBox } = require('react-google-maps/lib/components/addons/InfoBox');


/*global google*/
class MyMarkerComponent extends React.Component
 {


    // onToggleOpen({ isOpen }) {
    //     this.setState({ isOpen: !this.state.isOpen })
    // }


    constructor(){
        super()
        this.state={
            isHovered: false
        }

        this.markerHovered = this.markerHovered.bind(this);
        this.onClose = this.onClose.bind(this);
        this.onCursorChanged = this.onCursorChanged.bind(this);
   }

   markerHovered(item){
    this.setState({
        isHovered: true
    })
    console.log("lets see "+item.name)
}

    onClose(){
        this.setState({
            isHovered: false
        })
    }

    onCursorChanged(){
        this.setState({
            isHovered: false
        })
    }
    render() {

    // console.log('props ', this.props)
    return (

            <Marker
                position={{ lat: this.props.position.lat, lng: this.props.position.lng }}
                onClick={() => this.props.handleClick(this.props.doctorObj)}
                onMouseOver ={() => this.markerHovered(this.props.doctorObj)}
                onCursorChanged={this.onCursorChanged}
            >
                {this.state.isHovered && (
                    <InfoWindow
                    onCloseClick={this.onClose}
                    >
                        <h4>{this.props.doctorObj.name}</h4>
                    </InfoWindow>
                )}
            </Marker>
 
    )
    // }

    // <MarkerWithLabel
    //     position={props.position}
    //     labelAnchor={new google.maps.Point(208, 220)}
    // >
    //     <AnchorLabel />
    // </MarkerWithLabel>



                }


}



export default MyMarkerComponent;