import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import './App.css';
import LoginPage from './login/LoginPage';
import ContactPage from './contacts/ContactPage';
import Error from './error/Error';

function App({user, error}) {
    if(error.isError) return <Error errorMsg={error.errorMsg}/>
    if(user && user.tokenObj) return <ContactPage/>
    return <LoginPage />
}

const mapStateToProps = (state) => ({
    user: state.user,
    error: state.error
})

export default connect(mapStateToProps, null)(App);