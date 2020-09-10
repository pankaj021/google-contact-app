import React from 'react';
import {connect} from 'react-redux';

function ContactHeader({user}) {
    return (
        <header>
            <span className="logo-section">
                <img className='user-logo' src={user.profileObj.imageUrl} alt={user.profileObj.name || ""}/>
                <div className='person-info'>
                    <div className='name'>{user.profileObj.name || ""}</div>
                    <div className='email-logo'>{user.profileObj.email || ""}</div>
                </div>
            </span>
        </header>
    )
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps, null)(ContactHeader);