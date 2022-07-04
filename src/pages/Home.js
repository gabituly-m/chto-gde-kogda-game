import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import UserForm from '../components/UserForm'


export default class Home extends Component {
    render() {
        return(
        <div className="container">
            <UserForm />
        </div>
        )
    }
}