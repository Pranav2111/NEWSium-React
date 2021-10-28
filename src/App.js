
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './components/About';
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {

  pageSize = 6;

  state = {
    progress:0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (

      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />

          <Switch>
            <Route exact path="/about"><About /></Route>
            <Route exact path="/"><News setProgress={this.setProgress}  key="1" pageSize={this.pageSize} country="in" category="general" heading="General" /></Route>
            <Route exact path="/business"><News setProgress={this.setProgress}  key="2" pageSize={this.pageSize} country="in" category="business" heading="Business" /></Route>
            <Route exact path="/entertainment"><News setProgress={this.setProgress}  key="3" pageSize={this.pageSize} country="in" category="entertainment" heading="Entertainment" /></Route>
            <Route exact path="/health"><News setProgress={this.setProgress}  key="4" pageSize={this.pageSize} country="in" category="health" heading="Health" /></Route>
            <Route exact path="/science"><News setProgress={this.setProgress}  key="5" pageSize={this.pageSize} country="in" category="science" heading="Science" /></Route>
            <Route exact path="/sports"><News setProgress={this.setProgress}  key="6" pageSize={this.pageSize} country="in" category="sports" heading="Sports" /></Route>
            <Route exact path="/technology"><News setProgress={this.setProgress}  key="7" pageSize={this.pageSize} country="in" category="technology" heading="Technology" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}