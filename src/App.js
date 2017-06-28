import React, { Component } from 'react';
import Sidebar from './sidemenu';
import SidebarContent from './sidemenuContent';
import MaterialTitlePanel from './sidemenu material';

import logo from './logo.svg';
import './App.css';
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
    render() {
        const sidebar = <SidebarContent />;

        const contentHeader = (
            <span>
        {!this.state.docked &&
        <a onClick={this.toggleOpen.bind(this)} href="#" style={styles.contentHeaderMenuLink}>=</a>}
                <span style={styles.title}>WellStockedStork</span>
      </span>);

        const sidebarProps = {
            sidebar: sidebar,
            docked: this.state.docked,
            open: this.state.open,
            onSetOpen: this.onSetOpen,
        };
    return (
      <div className="App">
        <div className="App-header">

        </div>

          <Sidebar {...sidebarProps}>
              <MaterialTitlePanel title={contentHeader}>
                  <div style={styles.content}>

                  </div>
              </MaterialTitlePanel>
          </Sidebar>

      </div>


    );
  }
}

export default App;
