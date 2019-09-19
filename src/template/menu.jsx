import React from 'react';

const Menu = () => (
  <nav className="navbar navbar-inverse bg-inverse">
    <div className="container">
      <div className="navbar-header">
        <a href="#" className="navbar-brand">
          <i className="fa fa-calendar-checl-o"></i> TodoApp
        </a>
      </div>
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li><a href="#/todos">Todos</a></li>
          <li><a href="#/about">About</a></li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Menu
