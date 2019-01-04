import * as React from 'react';
import { Link } from 'react-router-dom';

class NavigationComponent extends React.Component<any, any>{
    public render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/login'}>Login</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default NavigationComponent