import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';
import axios from 'axios';
import AnswerOption from "./answersContent";
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RadioGroup, Radio} from 'react-radio-group'



const styles = {
    display: 'flex',
    justifyContent: "center"

};
const style = {
    margin: 15,
};

const Content = {
    padding: 10,
    margin: 10,
    backgroundColor: "",
    color: "",
    display: "inline-block",
    fontFamily: "monospace",
    fontSize: "18",

};

const answ ={
    listStyle: 'none'
};

class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: "",
            user: "",
            questions: [],
            answers: [],
            surveyAnswers: {}

    };

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event, value) {
        const answers=this.state.surveyAnswers;
        answers[event.target.name] = event.target.value;
        this.setState({
           surveyAnswers:answers
        })
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
                   this.setState ({ questions : response.data.surveyQuestions})

                    }




            })
            .catch(function (error) {
                console.log(error);
            });
    }
    handleClick(event){
        const payload=
            this.state.surveyAnswers

      axios.post('/answers', payload)
          .then((response) =>{
          if(response.status === 200){
              console.log('successfull');
          }
        })
    }

    render(){
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/login'/>;
        }


        return (

            <div className="dashboard" style={styles}>
                <MuiThemeProvider>

                <div style={Content}>

                    <h1>Welcome to The Well-Stocked Stork!</h1>
                    <br />
                    {
                        this.state.questions.map(quest => {
                            return (
                                <div>
                                    <p key={quest.id}> {quest.id}. {quest.question} </p>
                                    <ul>
                                    <li style={answ}> <input type="radio" name={`questionId${quest.id}`} key={quest.id}
                                                value={quest.surveyAnswers[0].value}
                                                onChange = {this.handleChange}  />
                                                {quest.surveyAnswers[0].body}
                                        </li>
                                    <li style={answ}> <input type="radio" name={`questionId${quest.id}`} key={quest.id}
                                                value={quest.surveyAnswers[1].value}
                                                onChange = {this.handleChange} />
                                                {quest.surveyAnswers[1].body}
                                                </li>
                                    <li style={answ}> <input type="radio" name={`questionId${quest.id}`} key={quest.id}
                                                value={quest.surveyAnswers[2].value}
                                                onChange = {this.handleChange}  />
                                                {quest.surveyAnswers[2].body}
                                                </li>

                                </ul>
                                </div>
                            );
                        })
                    }

                    <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>

                </div>
            </MuiThemeProvider>

            </div>
        )
    }
}

   export default Questions;
