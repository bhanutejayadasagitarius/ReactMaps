import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import './AnchorLabel.css';

import Rating from './Rating';


const AnchorLabel = (props) => {

    const { doctorObj } = props;

    return (
        <div className="my-label">
            <p className="heading mb-2">{doctorObj.name}</p>
            <p className="designation black mb-2">{doctorObj.designation}</p>
            <p className="designation black mb-2">{doctorObj.office}</p>
            <div className="row mb-2">
                <div className="col-sm-6 col-md-6">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                    {doctorObj.distance} Miles away
                </div>
                <div className="col-sm-6 col-md-6">
                    <FontAwesomeIcon icon={faLayerGroup} className="mr-2" />
                    Tier: <b className="black">{doctorObj.tier}</b>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-sm-6 col-md-6">
                    Programs facilated: <b className="black">{doctorObj.programsFacilitated}</b>
                </div>
                <div className="col-sm-6 col-md-6">
                    Days Since Last Spoke: <b className="black">{doctorObj.daysSinceLastSpoke}</b>
                </div>
            </div>

            <hr className="my-line" />

            <div className="row">
                <div className="col-sm-4 col-md-4">
                    <Rating
                        label="HCP Connections"
                        score={doctorObj.hcpPotential}
                    />
                </div>
                <div className="col-sm-4 col-md-4">
                    <Rating
                        label="Topic Potential"
                        score={doctorObj.topicPotential}
                    />
                </div>
                <div className="col-sm-4 col-md-4">
                    <Rating
                        label="Relevant Research"
                        score={doctorObj.relevantResearch}
                    />
                </div>
            </div>



        </div>
    )
}



export default AnchorLabel;