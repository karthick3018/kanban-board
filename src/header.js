import React from "react";

const Header = () => {
  return(
    <header>
      <div>
       <input placeholder="Search"/>
      </div>  
      <div className="header-actions-wrapper">
        <div className="header-actions-left">
          <p>General Pipeline</p>
          <p>All Deals</p>
        </div>  
        <div className="header-actions-right">
          <button className="import">Import</button>
          <button>New Board</button>
        </div>
      </div>
    </header>
  )
}

export default Header;