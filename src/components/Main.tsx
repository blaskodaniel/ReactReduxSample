import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import About from './About';

class MainComponent extends React.Component<any, any>{
    public render() {
        return (
            <div className="container-fluid">
                <Switch>
                    <Route exact={true} path="/" component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/about' component={About} />
                </Switch>
            </div>
        )
    }
}

export default MainComponent