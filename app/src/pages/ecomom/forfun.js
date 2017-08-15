

import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Row, Col } from 'react-bootstrap';



const styles = {
    textAlign:"center"


};

const Mom ={
    textAlign:"center",
    display: "inline",
    fontFamily: "book",


};



const img ={
    height:200,
    width:200
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

class Forfun extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:"",
            products:[]
        };
    }


    componentDidMount() {
        console.log(this.props.user);
        axios.post('/ecomom/forfun')
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    console.log("successfull");
                    // self.setState({ user: response.data.user.id});
                    this.setState({user: this.props.user});
                    this.setState({ products: response.data.Ecomoms})
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {


        return (


            <div style={styles}>
                <Grid>
                    <Row>
                <Col m={10}>
                    <h1 style={Mom}>For Fun</h1>
                    <br/>
                    {this.state.products.map((quest) => (
                        <p style={Content} key={quest.id}>  {quest.name}
                            <br/>
                            <br/>
                            <img style={img} src={quest.ImgUrl} />.
                            <br/>
                            <br/>
                            <br/>
                            {quest.description}
                            <br/>
                            <br/>
                            <a href={quest.buyUrl} >To Buy</a>

                        </p>
                    ))}
                </Col>
                    </Row>
                </Grid>
            </div>


        )

    }
}
export default Forfun;
