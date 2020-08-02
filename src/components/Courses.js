import React from 'react';

import HTML from './courses/HTML';
import CSS from './courses/CSS';
import JavaScript from './courses/JavaScript';
import { NavLink, Route, Redirect } from 'react-router-dom';


const Courses = ({match}) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink to={`${match}/html`} >HTML</NavLink></li>
        <li><NavLink to={`${match}/css`} >CSS</NavLink></li>
        <li><NavLink to={`${match}/javascript`} >JavaScript</NavLink></li>
      </ul>
    </div>
    
    {/* Write routes here... */}
    <Route exact path={match.path} render={ () => <Redirect to={`${match}/html`} /> } />
    <Route path={`${match}/html`} component={HTML} />
    <Route path={`${match}/css`} component={CSS} />
    <Route path={`${match}/javascript`} component={JavaScript} />
  </div>
);

export default Courses;