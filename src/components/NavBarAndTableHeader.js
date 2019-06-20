import React from "react";
import './styles/NavBarAndTopHeader.style.client.css'
const NavBarAndTableHead = (props) => (
  <div>
    <nav className="navbar  navbar-light bg-primary ">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
      >
        <i className="fa fa-plus" />
      </button>
      <div className="navbar-nav mr-auto ml-2">
        <form className="form-inline mb-0 ">
          <a className="navbar-brand d-none d-sm-inline" href="#">
            <h4 id="brand">Course Manager</h4>
          </a>
          <div className="input-group">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="New Course Title"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              <i className="fa fa-plus" />
            </button>
          </div>
        </form>
      </div>
    </nav>
      <div id="header" className="row shadow p-3 mb-2 bg-white rounded">
        <div className="container">
          <div className="row">
            <div className="col-5">Title</div>
            <div className="d-none d-sm-block col-2 text-right">Owned by</div>
            <div className="d-none d-sm-block col-3 text-right">Last modified by me</div>
            <div className="d-xs-block col-xs-2 col-sm-2 text-right">
               <button onClick={()=>props.changeView()} id="changeToCardsView"><i className="fa fa-th"></i></button>
              <span><i className="fa fa-sort" /></span>
            </div>
          </div>
        </div>
      </div>
  </div>
);
export default NavBarAndTableHead;
