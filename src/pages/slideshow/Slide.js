import React, { Component } from 'react';
import img01 from './imgs/img01.JPG';
const Slide = (props) => {
    const current = props.background[props.current];

    const styles = {
        imageBackground: {
            backgroundImage: `url(${current}.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
        }
    };
    return <div className="slide" style={styles.imageBackground}></div>
};

export default Slide;
