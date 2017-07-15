import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';


class Questions extends Component{
    constructor(props){
        super(props);
        this.state={
            redirect:"",
            user:"",
            questions:""
        }
    }

    componentWillMount(){
        axios.post('/questions')
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    console.log("Login successfull");
                    // self.setState({ user: response.data.user.id});
                    this.setState({user:this.props.user})

                }
                else if (response.status === 204) {
                    console.log("Username password do not match");
                    alert("username or password is incorrect")
                }
                else {
                    console.log("Username does not exists");
                    alert("Username does not exist");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render(){
    }
    return(

    );
}


export default Questions;
