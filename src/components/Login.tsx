import * as React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import * as AuthActions from '../store/actions/index';

// Amit kapunk a store-ból
const mapStateToProps = (state: any) => {
    console.log("LoginComponent: " + JSON.stringify(state))
    return {
        username: state.user.username,
        loginstatus: state.user.authenticate
    }
}

// Amit beküldünk a store-ba
const mapDispatchToProps = (dispatch: any) => {
    return {
        login: () => dispatch(AuthActions.Login('blaskoi',2)),
        logout: () => dispatch(AuthActions.Logout())
    }
}

class Login extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    public render() {
        if (this.props.loginstatus) {
            return null;
        }
        return (
            <Grid container={true} justify={"center"} alignItems={"center"} direction={"row"} spacing={8} style={{height:"500px"}}>
                <Grid item={true} xs={3}>
                    <Paper className="paper">
                        <p>Login page ({this.props.username})</p>
                        <button onClick={this.props.login}>Login</button>
                    </Paper>
                </Grid>
                <Grid item={true} xs={3}>
                    <Paper className="paper">
                        <p>Login page ({this.props.username})</p>
                        <button onClick={this.props.login}>Login</button>
                    </Paper>
                </Grid>
                <Grid item={true} xs={3}>
                    <Paper className="paper">
                        <p>Login page ({this.props.username})</p>
                        <button onClick={this.props.login}>Login</button>
                    </Paper>
                </Grid>
                <Grid item={true} xs={3}>
                    <Paper className="paper">
                        <p>Login page ({this.props.username})</p>
                        <button onClick={this.props.login}>Login</button>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);