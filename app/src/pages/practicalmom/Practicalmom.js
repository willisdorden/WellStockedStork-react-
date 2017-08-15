import React  from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
import {Grid, Row, Col} from 'react-bootstrap';

const styles = {
    display: 'flex',
    justifyContent: "center",
    padding: 60

};

const Mom ={
    textAlign:"center",
    display: "inline",
    fontFamily: "book",

};

const Links={
    padding: 60,
    listStyle: 'none',
    display: "inline",
    fontFamily: "book",
    fontSize: "15.5",
    textAlign: "center",


};

const Content ={
    padding: 10,
    margin: 10,
    backgroundColor: "",
    color: "",
    display: "inline-block",
    fontFamily: "book",
    fontSize: "15.5",
    textAlign: "center",
};



const Practicalmom =() => {
    return(
        <div className="practicalmom" style={styles}>
            <Grid>
                <Row>
                    <Col md={12} style={Mom}>
                <h1 style={Mom}>Pretty Practical Mom</h1>
                <br/>

                <p style={Content}>  You know there are “need-to-haves” and “nice-to-haves” and you prioritize accordingly.
                    You’ll make sure your little one has everything they need to thrive, but don’t feel the need to splurge or overspend on every item for your tiny tot.
                    Basic necessities are a given, and a few special indulgences are nice every now and then.
                    You understand that “things” are nice, but love and attention are the most important gifts you can give your child.
                    Check out the list we’ve put together just for you – we think you’ll agree that these items will make your life with baby practically perfect!</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                <ul style={Links}>
                    <li><Link to="/practicalmom/bathingandgrooming">Bathing & Grooming</Link></li>
                    <li><Link to="/practicalmom/forfun">For Fun</Link></li>
                    <li><Link to="/practicalmom/handyhelper">Handy Helper</Link></li>
                    <li><Link to="/practicalmom/kitchen">Kitchen</Link></li>
                    <li><Link to="/practicalmom/necessities">Necessities</Link></li>
                    <li><Link to="/practicalmom/nursery">Nursery</Link></li>
                    <li><Link to="/practicalmom/onthemove">On the Move</Link></li>
                </ul>
                    </Col>
                </Row>
            </Grid>
        </div>
    )
};


export default Practicalmom;

