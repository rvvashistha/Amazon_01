import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {

  const handelAuthentication=()=>{
    if(user){
      auth.signOut();
    }
  }
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to={"/"}>
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header_logo"
          alt="the img"
        />
      </Link>
      <div className="header_search">
        <input
          type="text"
          placeholder="Search Amazon.in"
          className="header_searchInput"
        ></input>
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!user&&"/login"}>
          <div className="header_option" onClick={handelAuthentication}>
            <span className="header_optionLineOne">hello,{!user?"Guest":user?.email}</span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <div className="header_option" >
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div> 
        <Link to={"/checkout"}>
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
