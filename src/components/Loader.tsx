import * as React from 'react';
import { connect } from 'react-redux';
import loader from "../assets/img/loader.svg";

const mapStateToProps = (state: any, match: any) => {
    return {
        IsLoading: state.AppReducer.loader
    }
}

class LoaderComponent extends React.Component<any, any>{
    public render() {
        // console.log("LoaderComponent:"+this.props.IsLoading);
        if (this.props.IsLoading) {
            console.log("LoaderComponent: Loading van");
            return (
                <div className="d-flex justify-content-center align-items-center">
                    <img src={loader} className="loader" />
                </div>
            );
        } else {
            console.log("LoaderComponent: Nincs loading");
            return null;
        }
    }
}

export default connect(mapStateToProps)(LoaderComponent as any)