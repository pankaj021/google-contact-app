import React from 'react';
import {connect} from 'react-redux';

function Contact({name, email, phone, photo}) {
    return (
        <div className="contact">
            <img className='user-logo' src={photo} alt={name}/>
            <div className='contact-info'>
                <div className='c-items c-name'>{name}</div>
                <div className='c-items c-email'>{email}</div>
                <div className='c-items c-phone'>{phone}</div>
            </div>
        </div>
    )
}

function ContactList({count, contacts}) {
    return (
        <div className='contacts'>
            <h2>{`Contacts(${contacts.length || 0})`}</h2>
            <div>
                <div className="contact-head">
                    <div className='contact-info'>
                        <div className='c-items c-name'>Name</div>
                        <div className='c-items c-email'>Email</div>
                        <div className='c-items c-phone'>Phone</div>
                    </div>
                </div>
                {
                    contacts.length ? <div className='contact-list'>
                        {
                            contacts.map((person, index) => <Contact key={index} {...person}/>)
                        }
                    </div> : <h1>No contact found.</h1>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    contacts: state.contacts
})

export default connect(mapStateToProps, null)(ContactList);