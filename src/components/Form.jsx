import React, { Component, useState } from 'react';

const Form = props => {
    const [state, setState] = useState({
        firstName: " ",
        lastName: " ",
        email: " ",
        password: " ",
        confirmPassword: " ",
    })
    const onChange = e => {
        e.preventDefault();
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = e => {
        e.preventDefault();

    }
    return(
		<>
        <div className="App">
            <form onSubmit ={onSubmit}>
                <label>First Name:</label><br />
                <input type="text" name="firstName" onChange={onChange}/>
                <br />
                <label>Last Name:</label><br />
                <input type="text" name="lastName" onChange={onChange}/>
                <br />
                <label>Email:</label><br />
                <input type="email" name="email" onChange={onChange}/>
                <br />
                <label>Password:</label><br />
                <input type="password" name="password" onChange={onChange}/>
                <br />
                <label>Confirm Password:</label><br />
                <input type="password" name="confirmPassword" onChange={onChange}/>
                <br />
            </form>
		</div>	
		<div className="Data">
			<h3>Your Form Data:</h3>
            <p>First Name: {state.firstName}</p>
            
            <p>Last Name: {state.lastName}</p>
            
            <p>Email: {state.email}</p>
           
            <p>Password: {state.password}</p>
            
            <p>Confirm Password: {state.confirmPassword}</p>
         
		</div>
        </>
    )
}

export default Form;
