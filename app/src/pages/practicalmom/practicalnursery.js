




import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';
import axios from 'axios';


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
    fontFamily: "monospace",
    fontSize: "20",
    textAlign: "center",
};

class Practicalnursery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:"",
            products:[]
        };
    }


    componentDidMount() {
        console.log(this.props.user);
        axios.post('/practical/nursery')
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
                <div>
                    <h1 style={Mom}>Nursery</h1>
                    <br/>
                    {this.state.products.map((quest) => (
                        <p style={Content} key={quest.id}> name: {quest.name}
                            <br/>
                            <br/>
                            <img style={img} src={quest.ImgUrl} />.
                            <br/>
                            <br/>
                            Description:<br/>
                            {quest.description}
                            <br/>
                            <br/>
                            <a href={quest.buyUrl} >To Buy</a>

                        </p>
                    ))}
                </div>
            </div>


        )

    }
}
export default Practicalnursery;

