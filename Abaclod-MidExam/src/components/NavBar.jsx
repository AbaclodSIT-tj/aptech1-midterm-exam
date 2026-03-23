import {Link} from 'react-router-dom'
const NavBar=()=>{

    return(
    <>
    <nav className="d-flex justify-content-center gap-3 bg-info w-100 h-100">
    <Link to="/">Home</Link>
    <Link to="./pages/SignUp">Sign up</Link>
    <Link to="./pages/Success">Success</Link>    
    <Link to="./pages/Profile">Profile</Link>        
    </nav>
    </>
    );
}
export default NavBar;