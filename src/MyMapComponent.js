import React from 'react';
import MyMarkerComponent from './MyMarkerComponent';
import { withGoogleMap, withScriptjs, GoogleMap } from 'react-google-maps';
import AnchorLabel from './AnchorLabel';

import { doctors } from './docList.json';



import { Spinner } from 'react-bootstrap';

class MyMapComponent extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            doctors: [],
            activeMarker: '',
        }
        this.markerClicked = this.markerClicked.bind(this);
        
    }


    componentWillMount() {
        // console.log('doctors: ', doctors);
        setTimeout(() => {
            this.setState({
                doctors: doctors
            })
        }, 3000);
    }


    onCloseClick(item){

    }

    markerClicked(item) {
        window.open("https://www.google.com")
        console.log('marker clicked: ', item.name)
        if (this.state.activeMarker !== item.id) {
            this.setState({
                activeMarker: item.id
            })
        } else {
            this.setState({
                activeMarker: ''
            })
        }

        
    }




    render() {

        {/* {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />} */ }

        {/* < MyMarkerComponent
                    position={{ lat: -34.397, lng: 150.644 }}
                /> */}



        if (this.state.doctors.length > 0) {
            return (
                <GoogleMap
                    defaultZoom={2.4}
                    defaultCenter={{ lat: this.state.doctors[0].location.lat, lng: this.state.doctors[0].location.lng }}
                >
                    {this.state.doctors.map(doctor => {
                        return (
                            < MyMarkerComponent
                                key={doctor.id}
                                doctorObj={doctor}
                                position={{ lat: doctor.location.lat, lng: doctor.location.lng }}
                                handleClick={this.markerClicked}
                            />
                        )
                    })}
                </GoogleMap >
            )
        } else {

            return (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            )
        }





    }


}




/*global google*/
// const MyMapComponent = compose(
//     // withProps({
//         //   googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
//     //   loadingElement: <div style={{ height: `100%` }} />,
//     //   containerElement: <div style={{ height: `400px` }} />,
//     //   mapElement: <div style={{ height: `100%` }} />,
//     // }),
//     withScriptjs,
//     withGoogleMap
// )((props) =>
//     <GoogleMap
//         defaultZoom={8}
//         defaultCenter={{ lat: -34.397, lng: 150.644 }}
//     >
//         {/* <MyMarkerComponent
//             labelAnchor={new google.maps.Point(0, 0)}
//             position={{ lat: -34.397, lng: 150.644 }}
//         /> */}

//         <MarkerWithLabel
//             position={{ lat: -34.397, lng: 150.644 }}
//             labelAnchor={new google.maps.Point(0, 0)}
//             labelStyle={{ backgroundColor: "yellow", fontSize: "32px", padding: "16px" }}
//         >
//             <AnchorLabel />
//         </MarkerWithLabel>

//     </GoogleMap>
// )



export default withScriptjs(withGoogleMap(MyMapComponent));