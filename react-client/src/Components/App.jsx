import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {browserHistory} from 'react-router';
import HomePage from './HomePage.jsx';
import NavBar from './HeaderComponents/NavBar.jsx';
import Footer from './FooterComponents/Footer.jsx';
class App extends Component{
    render(){
        return(
            <Router>
                <div>
                    <NavBar/>
                    <Route name="home" exact path="/" component={HomePage} />
                </div>
            </Router>
        )
    }

}
export default App;

//routes for various react routes used to navigate through the website. 
//React-router is used here.