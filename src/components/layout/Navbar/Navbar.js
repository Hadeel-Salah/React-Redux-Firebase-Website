import React from 'react';
import { Link } from 'react-router-dom';
import SignedOutLinks from '../SignOut/SignOutLinks';
import SignedInLinks from '../SignIn/SignInLinks';

const Navbar = () =>{
    return(
        <nav>
            <div className="nav-weapper grey dartken-3" style={{position: 'relative'}}>
                <Link to='/' 
                      className="brand-logo" 
                      style={{position: 'absolute', left:'30px'}}

                >BrandProject</Link>
                <SignedInLinks />
                <SignedOutLinks />
       </div>
       </nav>

    )
}
export default Navbar;