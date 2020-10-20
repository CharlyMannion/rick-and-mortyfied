import React from 'react';
import {Link} from '@reach/router';

const Header = () => {
    return (
    <header className="header">
        <Link to='/'><h1>Rick & Morty-fied</h1></Link>
    </header>
    )
}

export default Header;