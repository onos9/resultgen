import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const LeftMenu: React.FC = () => {

    let [leftMenuVisibility, setLeftMenuVisibility] = useState(false);

    function changeLeftMenuVisibility() {
        setLeftMenuVisibility(!leftMenuVisibility);
    }

    function getCollapseClass() {
        return (leftMenuVisibility) ? "" : "collapsed";
    }

    return (
        <Fragment>
            <div className="toggle-area">
                <button className="btn btn-primary toggle-button" onClick={() => changeLeftMenuVisibility()}>
                    <i className="fas fa-bolt"></i>
                </button>
            </div>

            <ul className={`navbar-nav bg-gradient-primary-green sidebar sidebar-dark accordion ${getCollapseClass()}`}
                id="collapseMenu">

                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon icon-green rotate-n-15">
                        <i className="fas fa-bolt"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Lighthouse <sup>Leading Academy</sup></div>
                </Link>

                <hr className="sidebar-divider my-0" />

                <li className="nav-item active">

                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>

                <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                    Result Generator
                </div>

                <li className="nav-item">
                    <Link className="nav-link" to={`/results`}>
                        <i className="fa fa-list-alt"></i>
                        <span>Results</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to={`/orders`}>
                        <i className="fas fa-book-reader"></i>
                        
                        <span>Subjects</span>
                    </Link>
                </li>

                <hr className="sidebar-divider" />

                <div className="sidebar-heading">
                    Admin
                </div>


                <li className="nav-item">
                    <Link className="nav-link" to={`/users`}>
                        <i className="fas fa-fw fa-user"></i>
                        <span>Users</span>
                    </Link>
                </li>

                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
        </Fragment>
    );
};

export default LeftMenu;
