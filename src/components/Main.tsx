import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import About from './About';

class MainComponent extends React.Component<any, any>{
    public render() {
        return (
            <main>
                <div className="row">
                    <Switch>
                        <Route path='/login' component={Login} />
                        <Route path='/about' component={About} />
                        <Route component={Home} />
                    </Switch>
                </div>
            </main>
        )
    }
}

export default MainComponent