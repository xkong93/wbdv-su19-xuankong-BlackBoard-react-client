import React from "react";

const CourseEditorNavBar = ({ title }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand col-3" href="#">
      {title} - WebDev
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div
      className="col-lg-9 justify-content-around collapse navbar-collapse"
      id="navbarNav"
    >
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Build
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Pages
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Theme
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Store
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Apps
          </a>
        </li>
      </ul>
      <div>
        Settings<i className="ml-2 fa fa-plus fa-1x" />
      </div>
    </div>
  </nav>
);

export default CourseEditorNavBar;
