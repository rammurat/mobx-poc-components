'use strict';

import React from 'react';

export default class Login extends React.Component {
    
  render() {

       //get objects from store
        const {formData} = this.props.store;

        //group item categories
        const formFields = formData ? formData.map(input => (
            <div className="form-group" key={input.id}>
                <label htmlFor="item" id="usernameLabel" className="col-sm-2 control-label">{input.formKey}</label>
                <div className="col-sm-10">
                    <input name="username" className="form-control" id="item" placeholder={input.formKey} ref="username" onChange={ this.handleChange } required/>
                    <div className="error" id="usernameError" />
                </div>
            </div> 
        )) : "";

    return (
        <div className="container-fluid">
            <div className="row">
                <form className="form-horizontal"  id="login" name="login" method="post" action="/listing" noValidate>
                    <h2 className="form-signin-heading">Add Form</h2>
                    {formFields}
                    <div className="form-group">
                        <button className="btn btn-primary center-block">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
  }
}