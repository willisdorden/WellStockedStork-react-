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
            selectedValue:"1"
        };
        this.handleChange = this.handleChange.bind(this);

    }


    handleChange(value) {
        this.setState({selectedValue: value});
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
        const payload={
            "answers": this.state.answers
        };
        console.log(payload)
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

                    {this.state.questions.map((quest) => (
                        <p key={quest.id}> {quest.id}. {quest.question}
                            <RadioGroup style={answ}
                                name="answers"
                                selectedValue={this.state.selectedValue}
                                onChange={this.handleChange}>
                                <li>
                                    <Radio  key ={quest.surveyAnswers[0].SurveyQuestionId} value="1" />{quest.surveyAnswers[0].body}
                                </li>
                                <li>
                                    <Radio key={quest.surveyAnswers[1].SurveyQuestionId} value="2" />{quest.surveyAnswers[1].body}
                                </li>
                                <li>
                                    <Radio key ={quest.surveyAnswers[2].SurveyQuestionId} value="3" />{quest.surveyAnswers[2].body}
                                </li>
                            </RadioGroup>

                            {/*<li> <input type="radio" name={quest.surveyAnswers[0].body} value="1"  onChange = {(event,value) => this.setState({answers: quest.surveyAnswers[0].value})}  />{quest.surveyAnswers[0].body}</li>*/}
                            {/*<li> <input type="radio" name={quest.surveyAnswers[1].body} value="2"  onChange = {(event,value) => this.setState({answers: quest.surveyAnswers[1].value})} />{quest.surveyAnswers[1].body}</li>*/}
                            {/*<li> <input type="radio" name={quest.surveyAnswers[2].body} value="3"  onChange = {(event,value) => this.setState({answers: quest.surveyAnswers[2].value})}  />{quest.surveyAnswers[2].body}</li>*/}

                        {/*</ul>*/}
                            {/*<RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/><RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>*/}

                        </p>



                    ))}
                    <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>

                </div>
            </MuiThemeProvider>

            </div>
        )
    }
}

   export default Questions;
