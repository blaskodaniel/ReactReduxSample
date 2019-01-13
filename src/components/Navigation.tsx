import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state: any, match: any) => {
    // console.log("NavigationComponent: " + JSON.stringify(state))
    return {
        loginstatus: state.user.authenticate
    }
}

class NavigationComponent extends React.Component<any, any>{
    constructor(props:any){
        super(props)
    }

    public render() {
        const pageURI = window.location.pathname+window.location.search
        const liClassName = (this.props.path === pageURI) ? "nav-item active" : "nav-item";
        
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
                <a className="navbar-brand text-light" href="/">Focitipp</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className={liClassName}>
                            <Link className="nav-link text-light" to="/">Home</Link>
                        </li>
                        <li className={liClassName}>
                            <Link className="nav-link text-light" to="/about">About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-light" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                                </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/">Action</a>
                                <a className="dropdown-item" href="/">Another action</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="/">Something else here</a>
                            </div>
                        </li>
                    </ul>
                    <Link className="nav-link text-light" to="/login">Login ({this.props.loginstatus.toString()})</Link>
                </div>
            </nav>
        )
    }
}

export default connect(mapStateToProps)(NavigationComponent as any)