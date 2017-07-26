
import React  from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'


const styles = {
    display: 'flex',
    justifyContent: "center"

};

const Mom ={
    textAlign:"center",
    display: "inline",

};

const Links={
    listStyle: 'none',
    display: "inline-block",
    fontFamily: "monospace",
    fontSize: "20",
    alignItems: 'center',


};

const Content ={
    padding: 10,
    margin: 10,
    backgroundColor: "",
    color: "",
    display: "inline-block",
    fontFamily: "monospace",
    fontSize: "20",
    textAlign: "center",
};



const Chicmom =() => {
    return(
        <div className="Chicmom" style={styles}>
            <div style={Mom}>
                <h1 style={Mom}>Super Chic Mom</h1>
                <br/>

                <p style={Content}> You want the best for your little one; after all, doesn’t your new bundle of joy deserve it?
                    You are always in fashion and you prefer to live in the lap of luxury. You’re no stranger to new trends, fresh styles and classic charm … the same goes for your baby!
                    You love your new addition with all your heart and will do everything you can to make sure he or she is set up for success.
                    Check out the list of “must have” items we’ve put together just for you – we think you’ll agree that these chic products will make life with your tiny tot even more super!</p>

                <ul style={Links}>
                    <li><Link to="/chicmom/bathingandgrooming">Bathing & Grooming</Link></li>
                    <li><Link to="/chicmom/forfun">For Fun</Link></li>
                    <li><Link to="/chicmom/handyhelper">Handy Helper</Link></li>
                    <li><Link to="/chicmom/kitchen">Kitchen</Link></li>
                    <li><Link to="/chicmom/necessities">Necessities</Link></li>
                    <li><Link to="/chicmom/nursery">Nursery</Link></li>
                    <li><Link to="/chicmom/onthemove">On the Move</Link></li>
                </ul>
            </div>
        </div>
    )
};


export default Chicmom;

