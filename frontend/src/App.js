import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import CourseList from './components/CourseList';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={CourseList} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
