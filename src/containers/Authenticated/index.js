import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

export default (Component) => {
    class Authenticated extends React.Component {

        componentWillMount() {
            this.checkAuth(this.props.user);
        }

        componentWillReceiveProps(nextProps) {
            this.checkAuth(nextProps.user);
        }

        checkAuth(auth) {

            if (!auth.isAuthenticated) {
                this.props.history.push('/login');
            }
        }

        render() {
            const {user} = this.props;

            return (
                <div>
                    {user.isAuthenticated === true
                        ? <Component {...this.props} />
                        : null
                    }
                </div>
            );
        }
    }

    const mapStateToProps = (state) => {
        return {
            user: state.userReducer
        }
    };

    Authenticated =  withRouter(Authenticated);

    return connect(mapStateToProps)(Authenticated);
}