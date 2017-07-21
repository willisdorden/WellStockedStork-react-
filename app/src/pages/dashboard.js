import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';

const styles = {
    display: 'flex',
    justifyContent: "center"

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
const questionLink = {
        listStyle: 'none',
        display: 'block',
        padding: '16px 0px',
        // color: '#757575',
        textDecoration: 'none',
};



class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            redirect:""
        }
    }

    componentWillMount() {
        console.log(this.props.user);
        if (this.props.user === null) {
            this.setState({redirect: true});
        }
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
                <br/>
                    <p style={Content}>If you’re expecting a baby, Congratulations! And if you’re simply looking around for a friend, you’ve come to the right place, too. (As long as you can answer a few questions that will assist us in determining the “right” mix of products for the upcoming bundle of joy, we can help!)</p>

                   <p style ={Content}> On the following pages, you’ll be asked to complete 10 fun and easy “quiz-style” questions.
                       A few considerations and disclaimers:</p>

                    <p style ={Content}>  •	We use these answers to determine which “mom type” we’re making recommendations for – so keep that in mind when you provide answers.</p>

                    <p style ={Content}>  •	We use the “mom” term loosely – we know in some families there are two dads, or aunts who act as moms, or moms who prefer to be called something else; we’re totally cool with that.</p>

                    <p style ={Content}> •	Our recommendations are based on what we’ve discovered in our own research, in exploring product reviews and from talking to real parents. We think you’ll love our product suggestions, but feel free to modify our lists if something doesn’t feel right to you.</p>

                    <p style ={Content}> •	Our site is new so once you’ve completed your survey and received your recommendations, we’d love your feedback. (We mean it!) We want The Well-Stocked Stork to be the best it can be, so please feel free to send your thoughts on how we can make the site even better for future users.</p>

                    <p style ={Content}>  We can’t wait to help you stock up for your new addition!</p>

                    <p style ={Content}>  Now, let’s get started … </p>
                    <li><Link to="/questions"  style={questionLink}>Question</Link></li>

                </div>

                {/*<li><Link to="/questions"  style={questionLink}>Question</Link></li>*/}
            </div>
        )
    }
}


export default Dashboard;
