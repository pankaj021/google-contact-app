import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Loader from '../loader/Loader';
import Error from '../error/Error';
import getContacts from '../../actions/contact-thunk';
import ContactHeader from './ContactHeader';
import './ContactPage.css';
import ContactList from './ContactList';

function ContactPage({user, error, loader, loadContact}) {
    useEffect(() => {
        loadContact(user.tokenObj);
    }, []);

    if(loader.isLoading) return <Loader loadingMsg={loader.loadingMsg}/>
    if(error.isError) return <Error errMsg={loader.errMsg}/>
    return (
        <div className='contact-page'>
            <ContactHeader />
            <ContactList />
        </div>
    )
}

const mapStateToProps = (state) => ({
    loader: state.loader,
    error: state.error,
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    loadContact: (token) => dispatch(getContacts(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);