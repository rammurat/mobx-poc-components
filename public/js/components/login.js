'use strict';

import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //update current field state on change 
    handleChange(e) {
        //add active class
        e.target.classList.add('active');

        //set state
        this.setState({
            [e.target.name]: e.target.value
        });

        //validate and show error
        this.showInputError(e.target.name);
    }

    //handle form submission 
    handleSubmit(e) {    
        e.preventDefault();

        if (!this.showFormErrors()) {
            console.log('form is invalid: do not submit');
        } else {
     
            document.forms['login'].submit();
            console.log('form is valid: submit');
        }
    }
    
    //reset form
    resetForm(){
        //get all input and select menus of form, if new form fields will introduce it will handle automatically 
        const inputs = document.querySelectorAll('input');
        const selects = document.querySelectorAll('select');
        
        //traverse input fields
        inputs.forEach(input => {
            input.classList.remove('active');
            input.value = "";
        });
        
        //traverse select fields 
        selects.forEach(select => {
            select.classList.remove('active');
            select.value = "";
        });
    }

    //show errors
    showFormErrors() {
        //get form fields 
        const inputs = document.querySelectorAll('input');
        const selects = document.querySelectorAll('select');
        
        let isFormValid = true;

        //traverse input fields 
        inputs.forEach(input => {
            //add error
            input.classList.add('active');

            const isInputValid = this.showInputError(input.name);

            if (!isInputValid) {
                isFormValid = false;
            }
        });
        
        //traverse select menu fields
        selects.forEach(select => {
            //add error
            select.classList.add('active');

            const isSelectValid = this.showInputError(select.name);

            if (!isSelectValid) {
                isFormValid = false;
            }
        });

        return isFormValid;
    }

    //validate input fields 
    showInputError(refName) {
        //fetch field
        const validity = this.refs[refName].validity;
        const label = document.getElementById(`${refName}Label`).textContent;
        const error = document.getElementById(`${refName}Error`);

        //validate field
        if (!validity.valid) {
            if (validity.valueMissing) {
                error.textContent = `${label} is a required field`; 
            } else if (validity.patternMismatch) {
                error.textContent = `${label} price should be in digits`; 
            } 
            return false;
        }

        //update error message
        error.textContent = '';
        return true;
    }
    
  render() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
                    <form  id="login" name="login" method="post" action="/listing" noValidate>
                        <h2 className="form-signin-heading">Login</h2>
                        <div className="form-group">
                            <label className="sr-only" htmlFor="item" id="usernameLabel">Username</label>
                            <input name="username" className="form-control" id="item" placeholder="Username" ref="username" onChange={ this.handleChange } required/>
                            <div className="error" id="usernameError" />
                        </div>
                        <div className="form-group">
                            <label className="sr-only" htmlFor="price" id="passwordLabel">Password</label>
                            <input name="password" className="form-control" id="password" placeholder="Password" ref="password" onChange={ this.handleChange } required/>
                            <div className="error" id="passwordError" />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" onClick={this.handleSubmit}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
  }
}