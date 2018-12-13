import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../store/actions/index';

const mapStateToProps = (state: any) => {
  return {
    something: 'State',
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    login: action.Login,
    logout: action.Logout
  }, dispatch)
}

class App extends React.Component<any,any> {
  constructor(props:any){
    super(props);
    this.state = {
      test: ''
    };
    this.userlogin = this.userlogin.bind(this);
  }

  public userlogin = () => {
    this.setState({test:'Valami'});
    this.props.login();
  }

  public render() {
    return (
      <div>
        <button onClick={this.userlogin}>Do it</button>
        <p>{this.state.test}</p>
        <p>{this.props.something}</p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
