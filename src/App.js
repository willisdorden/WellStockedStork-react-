import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Sidebar from './sidemenu/sidemenu';
import SidebarContent from './sidemenu/sidemenuContent';
import MaterialTitlePanel from './sidemenu/sidemenu material';
import Loginscreen  from './pages/Loginscreen';
import './App.css';
import { Router, Route, Switch } from 'react-router';

import logo from './logo.svg';

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
    },
    title:{
        textAlign: 'center'
    }
};


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {

            docked: false,
            open: false,
        };


        this.toggleOpen = this.toggleOpen.bind(this);
        this.onSetOpen = this.onSetOpen.bind(this);
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
<div>
          <Sidebar {...sidebarProps} >
              <MaterialTitlePanel title={contentHeader}>
                  <div style={styles.content}>

                  </div>
              </MaterialTitlePanel>
          </Sidebar>

</div>
          <div className="main">


          </div>


      </div>



    );
  }
}

export default App;
