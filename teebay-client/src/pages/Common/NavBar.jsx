import React from 'react'
import { connect, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import PropTypes from "prop-types";
import { logout } from '../../actions/userAuthentication'; 
const NavBar = ({logout}) => {
    const spanStyle = {
        color:"white",
        fontWeight:"bolder"
    }
    const history = useHistory();
    const loggedIn = useSelector((state) => state.user.loggedIn)
    const logOut = () => {
        logout();
        history.push("/")
       
    }
    return (
        <div style={{width:"100%",padding:"20px",position:"fixed",top:"0",backgroundColor:"#9EADBA"}}>
            <div style={{display:"flex",justifyContent:"space-evenly"}}>
                {loggedIn ?<>
               <Link to="/allproducts">
               <span style={spanStyle}>All PRODUCTS</span> 
               </Link>
               <Link to="/myproducts">
               <span style={spanStyle}>MY PRODUCTS</span> 
               </Link>
               <Button onClick={() => logOut()}  content="Logout" color="grey"/>
                
                </> : <Link to="/">
               <span style={spanStyle}>Login</span> 
               </Link> }
            </div>          
        </div>
    )
}
NavBar.propTypes = {
 logout : PropTypes.func.isRequired
}
export default connect(null,{logout})(NavBar)