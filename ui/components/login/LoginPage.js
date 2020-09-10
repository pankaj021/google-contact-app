import React from 'react';
import {connect} from 'react-redux';
import {GoogleLogin} from 'react-google-login';
import './LoginPage.css'
import { getUserInfoSuccess, getUserInfoError } from '../../actions/sync-actions';
import Error from '../error/Error';

function LoginPage({error, getUserInfoSuccess, getUserInfoError}) {
    if(error.isError) return <Error errorMsg={error.errorMsg}/>
    return (
        <div className="login">
            <div className='login-head'>
                <img src='/icons/google.svg' alt="Google"/>
                <h3>Sign in with Google</h3>
            </div>
            <div className='login-form'>
                <input type='text' placeholder='Email' className='u-input'/>
                <input type='password' placeholder="Password" className='u-input'/>
                <GoogleLogin
                    clientId="384897608931-mg877mrehvqil42p276fvnqg4oa0i5s8.apps.googleusercontent.com"
                    render={renderProps => (
                        <button className='sign-btn-in' onClick={renderProps.onClick} disabled={renderProps.disabled}>Google Sign In</button>
                    )}
                    buttonText="Login"
                    onSuccess={getUserInfoSuccess}
                    onFailure={getUserInfoError}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    error: state.error
})

const mapDispatchToProps = (dispatch) => ({
    getUserInfoSuccess: (userInfo) => dispatch(getUserInfoSuccess(userInfo)),
    getUserInfoError: (userInfo) => dispatch(getUserInfoError(userInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);