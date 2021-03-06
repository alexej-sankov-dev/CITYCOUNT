import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Modal from './Modal';
import history from '../history';
import UserForm from './UserForm'
import { setUserData } from '../actions'

class UserDataModal extends React.Component {
    
    onSubmit = (formValues) => {
        this.props.setUserData(formValues);
    };

    renderActions () {
        return (
            <React.Fragment> 
            </React.Fragment>
        );
    }

    renderContent() {
        
        return (
            <UserForm isSignedIn={this.props.isSignedIn} onSubmit={this.onSubmit}/>
        )
    }

    render () {
        return (
            <Modal
                title="Gib dein Nutzernamen ein: "
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => (null)}
            />

        );
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn};
}


export default connect(mapStateToProps,  {setUserData} )(UserDataModal);