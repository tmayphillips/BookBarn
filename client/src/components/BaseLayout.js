import React, {Component} from 'react';
import './BaseLayout.css';
import {Link, NavLink} from 'react-router-dom';

export class Menu extends Component {
  render() {
    return(
      <ul className="menu">
        <li><NavLink exact activeClassName="active-link" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="active-link" to="/view-all-books">View All Books</NavLink></li>
        <li><NavLink activeClassName="active-link" to="/add-book">Add Book</NavLink></li>
      </ul>
    )
  }
}

export class Footer extends Component {
  render() {
    return(
      <h1 className="footer">Copyright 2019</h1>
    )
  }
}

export class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Menu />
          {this.props.children}
        <Footer />
      </div>
    )
  }
}
