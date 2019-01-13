import * as React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../store/actions/index';

const mapStateToProps = (state: any, match: any) => {
    return {
        loginstatus: state.user.authenticate,
        userlist: state.AppReducer.users
    }
}

const mapDispatchToProps = (dispacth: any) => {
    return {
        GetMatch: () => { dispacth(Actions.GetMatch()) }
    }
}

class HomeComponent extends React.Component<any, any>{
    public componentDidMount() {
        if (this.props.loginstatus) {
            this.props.GetMatch();
        }

    }

    public render() {

        if (!this.props.loginstatus) {
            return (
                <div>
                    <p>Nem vagy bejelentkezve</p>
                </div>
            )
        } else {
            const users = this.props.userlist.map((user: any,i: any)=>{
                return (
                    <li key={i}>{user.name}</li>
                )
            })
            return (
                <div className="row">
                    <div className="col-12">
                        <ul>
                            {users}
                        </ul>
                    </div>
                </div>
            )
        }


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent as any)