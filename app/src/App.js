import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link,} from 'react-router-dom';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Sidebar from './sidemenu/sidemenu';
import SidebarContent from './sidemenu/sidemenuContent';
import MaterialTitlePanel from './sidemenu/sidemenu material';
import Loginscreen  from './pages/Loginscreen';
import Register from './pages/Registerscreen';
import Home from './pages/home';
import About from './pages/about';
import Dashboard from './pages/dashboard';
import Questions from './pages/questions';
import Ecomom from './pages/ecomom/Ecomom';
import Bathingandgrooming from './pages/ecomom/bathingandgrooming';
import Forfun from './pages/ecomom/forfun';
import HandyHelper from './pages/ecomom/handyhelper';
import Kitchen from './pages/ecomom/kitchen';
import Necessities from './pages/ecomom/necessities';
import Nursery from './pages/ecomom/nursery';
import Chicmom from './pages/chicmom/Chicmom';
import Chicbathingandgrooming from './pages/chicmom/chicbathingandgrooming';
import Chicforfun from './pages/chicmom/chicforfun';
import ChichandyHelper from './pages/chicmom/chichandyhelper';
import Chickitchen from './pages/chicmom/chickitchen';
import Chicnecessities from './pages/chicmom/chicnecessities';
import Chicnursery from './pages/chicmom/chicnursery';
import Practicalmom from './pages/practicalmom/Practicalmom';
import Practicalbathingandgrooming from './pages/practicalmom/practicalbathingandgrooming';
import Practicalforfun from './pages/practicalmom/practicalforfun';
import PracticalhandyHelper from './pages/practicalmom/practicalhandyhelper';
import Practicalkitchen from './pages/practicalmom/practicalkitchen';
import Practicalnecessities from './pages/practicalmom/practicalnecessities';
import Practicalnursery from './pages/practicalmom/practicalnursery';


import './App.css';
injectTapEventPlugin();
const styles = {
    contentHeaderMenuLink: {
        textDecoration: 'none',
        color: 'white',
        padding: 8,
    },
    content: {
        padding: '16px',
        backgroundColor: "white",
        height:1600
    },
    title:{
        textAlign: 'center'
    }
};


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            docked: false,
            open: false,
        };


        this.toggleOpen = this.toggleOpen.bind(this);
        this.onSetOpen = this.onSetOpen.bind(this);
        this.login = this.login.bind(this);
    }



    onSetOpen(open) {
        this.setState({open: open});
    }



    toggleOpen(ev) {
        this.setState({open: !this.state.open});

        if (ev) {
            ev.preventDefault();
        }
    }
    login(user) {
        console.log('user::', user);
        this.setState({
            user,
        })
    }
    componentWillMount(){
        var loginPage =[];
        loginPage.push(<Loginscreen parentContext={this}/>);
        this.setState({
            loginPage:loginPage
        })
    }

    render() {
        const sidebar = <SidebarContent />;


        const contentHeader = (
            <span>
        {!this.state.docked &&
        <a onClick={this.toggleOpen.bind(this)} href="/" style={styles.contentHeaderMenuLink}>=</a>}
                <span style={styles.title}>Menu</span>
      </span>);

        const sidebarProps = {
            sidebar: sidebar,
            docked: this.state.docked,
            open: this.state.open,
            onSetOpen: this.onSetOpen,
        };

    return (

      <div className="App">
          <Sidebar {...sidebarProps} >
              <MaterialTitlePanel title={contentHeader}>
                  <div style={styles.content}>

                      <Route exact path ="/" component={Home} />
                      <Route   path ="/about" component={About} />
                      <Route   path ="/login" component={() => <Loginscreen onLogin={this.login} />} />
                      <Route   path ="/register" component={Register} />
                      <Route   path ="/dashboard" component={() => <Dashboard user={this.state.user} />} />
                      <Route   path="/questions"  component={() => <Questions user={this.state.user} />} />
                      <Route   path="/ecomom" component={Ecomom} />
                      <Route   path="/ecomom/bathingandgrooming" component={() => <Bathingandgrooming user={this.state.user} />} />
                      <Route   path="/ecomom/forfun" component= {() => <Forfun user={this.state.user} />} />
                      <Route   path="/ecomom/handyhelper" component={() => <HandyHelper user={this.state.user} />} />
                      <Route   path="/ecomom/kitchen" component={() => <Kitchen user={this.state.user} />} />
                      <Route   path="/ecomom/necessities" component={() => <Necessities user={this.state.user} />} />
                      <Route   path="/ecomom/nursery" component={() => <Nursery user={this.state.user} />} />
                      {/*<Route   path="/ecomom/onthemove" component={Ecomom} />*/}
                      <Route   path="/chicmom" component={Chicmom} />
                      <Route   path="/chicmom/bathingandgrooming" component={() => <Chicbathingandgrooming user={this.state.user} />} />
                      <Route   path="/chicmom/forfun" component= {() => <Chicforfun user={this.state.user} />} />
                      <Route   path="/chicmom/handyhelper" component={() => <ChichandyHelper user={this.state.user} />} />
                      <Route   path="/chicmom/kitchen" component={() => <Chickitchen user={this.state.user} />} />
                      <Route   path="/chicmom/necessities" component={() => <Chicnecessities user={this.state.user} />} />
                      <Route   path="/chicmom/nursery" component={() => <Chicnursery user={this.state.user} />} />
                      {/*<Route   path="/chicmom/onthemove" component={chicmom} />*/}
                      <Route   path="/practicalmom" component={Practicalmom} />
                      <Route   path="/practicalmom/bathingandgrooming" component={() => <Practicalbathingandgrooming user={this.state.user} />} />
                      <Route   path="/practicalmom/forfun" component= {() => <Practicalforfun user={this.state.user} />} />
                      <Route   path="/practicalmom/handyhelper" component={() => <PracticalhandyHelper user={this.state.user} />} />
                      <Route   path="/practicalmom/kitchen" component={() => <Practicalkitchen user={this.state.user} />} />
                      <Route   path="/practicalmom/necessities" component={() => <Practicalnecessities user={this.state.user} />} />
                      <Route   path="/practicalmom/nursery" component={() => <Practicalnursery user={this.state.user} />} />
                      {/*<Route   path="/practical/onthemove" component={Practical} />*/}


                  </div>
              </MaterialTitlePanel>
          </Sidebar>

</div>







    );
  }
}

export default App;
