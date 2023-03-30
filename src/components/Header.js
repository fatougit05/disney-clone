import React from 'react'
import styled from 'styled-components'
import { useDispatch , useSelector } from 'react-redux';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate , Navigate, useLocation , Outlet} from 'react-router-dom';
import { auth } from '../firebase';
import { useEffect } from 'react';

import { selectUsername, selectUserPhoto, selectUserEmail, setUserLoginDetails, setSignOutState } from '../features/user/userSlice';
import { GoogleAuthProvider } from 'firebase/auth';
function Header() {
const dispatch = useDispatch();
const navigate = useNavigate();
const username = useSelector(selectUsername)
const email = useSelector(selectUserEmail)
const userPhoto = useSelector(selectUserPhoto)
const location = useLocation()
useEffect(() => {
    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        }))
      }
    auth.onAuthStateChanged(async (user) => {
    
        if(user) {
           setUser(user)
            //history.push('/home')
        navigate('/home')
        }
    })
},[username])





  const handleAuth = () => {
   const provider = new GoogleAuthProvider();
//const auth = getAuth();
if(!username) {

    signInWithPopup(auth, provider).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
    dispatch(setUserLoginDetails())
navigate('/')

        //setUser(user);
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

}

else if (username) {
    auth.signOut().then(() => {
        dispatch(setSignOutState())
       // history.push('/')
      navigate('/')
    })
}



 


}


  return (
<Nav>
<Logo>
    <img src='/images/logo.svg' alt='Disney+' />
</Logo>

{!username ? (
<Login onClick={handleAuth}>Login</Login> 
) : (
<>

<NavMenu>
   
<a href='/home'>
    <img src="/images/home-icon.svg" alt='HOME'>
    </img>
   
    <span>HOME</span>
   
   
</a>

<a>
    <img src="/images/search-icon.svg">
    </img>
    <span>SEARCH</span>
</a>

<a>
    <img src="/images/watchlist-icon.svg">
    </img>
    <span>WATCHLIST</span>
</a>

<a>
    <img src="/images/original-icon.svg">
    </img>
    <span>ORIGINALS</span>
</a>

<a>
    <img src="/images/movie-icon.svg">
    </img>
    <span>MOVIES</span>
</a>

<a>
    <img src="/images/series-icon.svg">
    </img>
    <span>SERIES</span>
</a>




    </NavMenu>
    <SignOut>

    <UserImg src={userPhoto} alt={username}></UserImg>
<DropDown>
    <span onClick={handleAuth}>Sign Out</span>
</DropDown>
    </SignOut>
  
    </>
    )}
</Nav>
  )
}


export default Header;

const DropDown = styled.div`
position: absolute;
top: 48px;
right: 0px;
background: rgb(19, 19, 19);
border: 1px solid rgba(151, 151, 151, 0.34);
border-radius: 4px;
box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
padding: 10px;
font-size: 14px;
letter-spacing: 3px;
width: 130px;
opacity: 0;
text-align : center;
z-index: 1;
`;

const UserImg = styled.img`
height: 100%;

`


const SignOut = styled.div`
position: relative;
height: 48px;
width: 48px;
display: flex;
cursor: pointer;
align-items : center;
justify-content: center;

${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
}
&:hover {
    ${DropDown} {
        opacity: 1;
        transition-duration: 1s;
    }
}

`;






const Nav = styled.nav`
height: 70px;
background: #090b13;
display: flex;
align-items: center;
padding: 0 36px;
`;

const Logo = styled.a`
padding: 0;
width: 80px;
margin-top: 4px;
max-height: 70px;
font-size: 0;
display: inline-block;

img {
    display: block;
    width: 100%;
}
`;

const NavMenu = styled.div`
display: flex;
flex: 1;
margin-left: 25px;

a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
        height: 20px;
    }
    
    span {
        font-size: 13px;
        letter-spacing: 1.42px;
        position: relative;

        &:after {
            content: "";
            height: 2px;
            background: white;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        }
    }
    &:hover {
        span:after {
            transform: scaleX(1);
            opacity: 1;
        }
    }



}



`;

const Login = styled.a`
background-color: rgba(0, 0, O , 0.6);
padding: 8px 16px;
text-transform: uppercase;
letter-spacing: 1.5px;
border-radius: 4px;
transition: all 200ms ease 0s;
border: 1px solid white;
cursor: pointer;
position: absolute;
right: 16px;

&:hover {
    background-color: white;
    color: #000;
    border-color: transparent;
}

`

