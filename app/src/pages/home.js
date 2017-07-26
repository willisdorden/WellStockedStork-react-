import React  from 'react';
import lincoln from '../img/lincoln.jpg';
import img01 from '../img/img01.JPG';
import img02 from '../img/img02.JPG';
import img03 from '../img/img03.JPG';
import img04 from '../img/img04.JPG';
import Rotation from 'react-rotation';
const styles = {
    display: 'flex',
    justifyContent: "center"

};

const Content ={
    padding: 250,
    margin: 10,
    backgroundColor: "",
    color: "",
    display: "inline-block",
    fontFamily: "monospace",
    fontSize: "50",
    textAlign: "center",
};
const Home =() => {
        return(
            <div className="Home" style={styles} >
               <h1 style={Content}>The Well-Stocked Stork</h1>
            </div>
        )
    };


export default Home;
