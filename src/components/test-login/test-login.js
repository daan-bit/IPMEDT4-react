import React,  { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from './navbar';
class Test extends Component {

    render() {
        return(
           <Navbar />
        );
    }
};

export default Test