import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return (
            <div><h3>HOME</h3></div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

export default withRouter(connect(mapStateToProps)(Home));