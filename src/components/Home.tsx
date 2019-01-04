import * as React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state:any) => {
    return {
        loginstatus: state.user.authenticate
    }
}

class HomeComponent extends React.Component<any,any>{
    public render(){

        if(!this.props.loginstatus){
            return null;
        }

        return(
            <div>
                <p>Logged place</p>
            </div>
        )
    }
}

export default connect(mapStateToProps)(HomeComponent)