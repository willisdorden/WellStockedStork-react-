import React  from 'react';
import lincoln from '../img/lincoln.jpg';
import img01 from '../img/img01.JPG';
import img02 from '../img/img02.JPG';
import img03 from '../img/img03.JPG';
import img04 from '../img/img04.JPG';
import Rotation from 'react-rotation';
const styles = {
    height:610,
    width: 1405
    };
const Home =() => {
        return(
            <div className="Home">
                <Rotation>
                    <img  src={lincoln} style={styles}/>
                    <img  src={img01} style={styles}/>
                    <img  src={img02} style={styles}/>
                    <img  src={img03} style={styles}/>
                    <img  src={img04} style={styles}/>



                </Rotation>
            </div>
        )
    };


export default Home;
