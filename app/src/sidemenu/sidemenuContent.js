import React from 'react';
import MaterialTitlePanel from './sidemenu material';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group';


const styles = {
    sidebar: {
        width: 256,
        height: '100%',
    },
    sidebarLink: {
        display: 'block',
        padding: '16px 0px',
        color: '#757575',
        textDecoration: 'none',
    },
    divider: {
        margin: '8px 0',
        height: 1,
        backgroundColor: '#757575',
    },
    content: {
        padding: '16px',
        height: '100%',
        backgroundColor: 'white',
    },
    sidebarUl: {
        listStyle: 'none'
    }
};

const SidebarContent = (props) => {

    const style = props.style ? {...styles.sidebar, ...props.style} : styles.sidebar;

    const links = [];

    for (let ind = 0; ind < 10; ind++) {
        links.push(
            <a key={ind} href="#" style={styles.sidebarLink}>Mock menu item {ind}</a>);
    }

    return (
        <MaterialTitlePanel title="Menu" style={style}>
            <div style={styles.content}>
                <ul style={styles.sidebarUl}>
                <NavLink to="/" style={styles.sidebarLink}>Home</NavLink>
                <li><Link to="/about" style={styles.sidebarLink}>About</Link></li>
                </ul>
                <div style={styles.divider} />
                {/*{links}*/}
                <ul style={styles.sidebarUl}>
                <li><Link to="/register" style={styles.sidebarLink}>Register</Link></li>
                <li><Link to="/login"  style={styles.sidebarLink}>Login</Link></li>
                {/*<li><Link to="/links" style={styles.sidebarLink}>links</li>*/}
                </ul>

            </div>
        </MaterialTitlePanel>
    );
};

SidebarContent.propTypes = {
    style: PropTypes.object,
};

export default SidebarContent;