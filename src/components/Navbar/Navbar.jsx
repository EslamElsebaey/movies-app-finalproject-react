/* eslint-disable jsx-a11y/anchor-is-valid */
import React  from 'react'
import {Link , useNavigate} from "react-router-dom"
import $ from "jquery";




export default function Navbar({isLogin  , userName , setuserName , setIsLogin , inputSearchFunc}) {
 

  let navigation = useNavigate()
 
  function logOut(){
  localStorage.removeItem("newUser");
  setIsLogin(null)
  setuserName("");
  navigation("/login");
  localStorage.removeItem("moviesPage")
  localStorage.removeItem("tvshowPage")
  localStorage.removeItem("personsPage")
 }


$(".nav-link").click(function (e){
  $(e.target).css("color" , "#edaf18");
  $(".nav-link").not(e.target).css("color" , "white");
})

$(".nav-link").click(function(){
  $(".navbar-toggler").addClass("collapsed"); 
  $(".navbar-collapse").removeClass("show"); 
})


 
 
  return (
    <>
    <nav className="navbar   navbar-expand-lg  ">
      <div className="container">
        <div className="logoinfo d-flex align-items-center justify-content-center">
            <Link className="navbar-brand text-capitalize" to="home">
            <i className="fa-solid fa-clapperboard logo me-2"></i>
            </Link>
        </div>
      
        <button    className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"><i className="fa-solid fa-bars"></i></span>
      </button>
        <div   className="collapse navbar-collapse" id="navbarSupportedContent">
        {isLogin === null ? "" :   <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link homelink "   aria-current="page"      to="home" >home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="movies" aria-current="page"     >movies</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="tvshow" aria-current="page"     >tv show</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="people" aria-current="page"     >people</Link>
            </li>
          </ul>}
        
          <ul className="navbar-nav ms-auto  ">
            {isLogin === null ? "" :   <li className="nav-item inputli me-4">
              <Link to="/SearchComp">
              <input type="text" onKeyUp={(event)=>{ inputSearchFunc(event)  }} className='form-control h-100 search-input' placeholder='Search' />
              </Link>
          </li>}
        
          <li className="nav-item social-items d-flex align-items-center" >
            <a  target="_blank" href="https://www.facebook.com/eslam.elsebaey.707/" rel="noreferrer"> <i className="fa-brands fa-facebook  social "></i></a>
            <a  target="_blank" href="https://github.com/EslamElsebaey" rel="noreferrer">  <i className="fa-brands fa-github  social "></i></a>
            <a  target="_blank" href="https://www.linkedin.com/in/eslam-elsebaey-ab9564163/" rel="noreferrer">   <i className="fa-brands fa-linkedin  social "></i></a>
          </li>
          {isLogin ? <>    <li className="nav-item d-flex align-items-center">
            <span className='nav-link'>Hello {userName} <i className="fa-solid face fa-face-grin-beam"></i></span>
            </li> <li className="nav-item">
               <a onClick={logOut} className="nav-link logout">logout</a>
            </li> </>  :  <><li className="nav-item">
              <Link className="nav-link" to="login">login</Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="register">register</Link>
            </li></>}
          </ul>
        </div>
      </div>
    </nav>

    </>
  )
}
