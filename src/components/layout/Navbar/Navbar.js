import React from 'react';
import { Link } from 'react-router-dom';
import SignedOutLinks from '../SignOut/SignOutLinks';
import SignedInLinks from '../SignIn/SignInLinks';
import { connect } from 'react-redux'


const Navbar = (props) =>{
    const { auth, profile } = props;
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
    return(
        <nav>
            <div className="nav-weapper grey dartken-3" style={{position: 'relative'}}>
                <Link 
                    to='/' 
                    className="brand-logo" 
                    style={{position: 'absolute', left:'30px'}}

                >BrandProject</Link>
             {links}
       </div>
       </nav>

    )
}
const mapStateToProps = (state) => {
    return{
      auth: state.firebase.auth,
      profile: state.firebase.profile
    }
  }
  
  export default connect(mapStateToProps)(Navbar)