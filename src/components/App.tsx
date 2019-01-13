import * as React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as action from '../store/actions/index';
import Navigation from './Navigation';
import Main from './Main';
import Loader from './Loader';
import { withRouter } from "react-router";

// Interfaces:
interface IState {
  test: string;
  something: string;
  thisnumber: number;
}

// Amit kapunk a store-ból
const mapStateToProps = (state: any, match: any) => {
  // console.log("AppComponent: " + JSON.stringify(state))
  return {
    age: state.testreducer.age,
    loginstate: state.user.authenticate
  }
}

// Amit beküldünk a store-ba
const mapDispatchToProps = (dispatch: any) => {
  return {
    increment: () => dispatch({ type: 'INC' }),
    decrement: () => dispatch({ type: 'DEC' })
  }
}

class App extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      test: 'default state',
      something: '',
      thisnumber: 0
    };
    this.userlogin = this.userlogin.bind(this);
  }

  public userlogin = () => {
    this.setState({ test: 'Valami' });
  }

  public render() {
    return (
      <div className="container-fluid p-0">
        <Loader />
        <Navigation /> 
        <Main />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App as any))
