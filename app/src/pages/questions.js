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


class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: "",
            user: "",
            questions: []
        }
    }

    componentDidMount() {
        console.log(this.props.user);
        axios.post('/questions')
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    console.log("successfull");
                    // self.setState({ user: response.data.user.id});
                    this.setState({user: this.props.user});
                        this.setState({redirect: false});
                   this.setState ({ questions : response.data.surveyQuestions});

                    }




            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render(){
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/login'/>;
        }


        return (
            <div className="dashboard" style={styles}>
                <div>
                    <h1>Welcome to The Well-Stocked Stork!</h1>
                    <br />
                    {this.state.questions.map((quest) => (
                        <p> {quest.question}</p>
                    ))};
                </div>
            </div>
        )
    }
}

   export default Questions;
