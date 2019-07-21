import React from 'react';

import styled from 'styled-components';
import { css } from 'styled-components';

import './Rating.css';




const Rating = (props) => {


    const color = (props.score >= 0 && props.score <= 33) ? 'red' : ((props.score > 33 && props.score <= 66) ? 'blue' : 'green');
    const text = (props.score >= 0 && props.score <= 33) ? 'L' : ((props.score > 33 && props.score <= 66) ? 'M' : 'H');

    // const style = {
    //     '::after': {
    //         position: 'absolute',
    //         top: '0',
    //         bottom: '0',
    //         left: '0',
    //         width: `${props.score}%`,
    //         height: '15px',
    //         background: { color },
    //         // content: { text }
    //         content: 'aaaa'
    //     }
    // }



    const RatingBar = styled.div`
      & {
        width: 100%;
        height: 15px;
        background-color: #edeeef;
      }
        &:after {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            content: ${text};
            // background: ${color};
            background: black;
            width: ${props.score}%;
        }
        `;

    // ${props =>
    //     (props.score >= 0 && props.score <= 33) &&
    //     css`
    //     &:after {    
    //         content: "L";
    //         background: red;
    //         color: white;
    //     }
    // `}

    // ${props =>
    //     (props.score > 33 && props.score <= 66) &&
    //     css`
    //     &:after {    
    //         content: "M";
    //         background: blue;
    //         color: white;
    //     }
    // `}
    // ${props =>
    //     (props.score >= 67) &&
    //     css`
    //     &:after {    
    //         content: "H";
    //         background: green;
    //         color: white;
    //     }
    // `}


    const style = {
        width: `${props.score}%`,
        background: `${color}`,
        content: { text }
    }


    // console.log('color: ', color)
    return (
        <div>
            <p className="label">{props.label}</p>
            <div className="main-container">
                <div className="rating-bar" style={style}>
                    {text}
                </div>
            </div>
        </div>
    )
}


export default Rating;