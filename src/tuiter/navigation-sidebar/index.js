import React from "react";
import { Link, useLocation } from "react-router-dom";
import './index.css';
const NavigationSidebar = () => {
    const { pathname } = useLocation();
    const active = pathname.split("/")[2];

    return (
        <div className="list-group">
            <Link to={"/"} className={`list-group-item ${active === "Tuiter".toLowerCase() ? "active" : ""}`} >
                <i className="bi bi-align-top wd-icon-width  mt-1"></i> Tuiter
            </Link>
            <Link to={"/tuiter/home"} className={`list-group-item ${active === "Home".toLowerCase() ? "active" : ""}`} >
                <i className="bi bi-house-door-fill wd-icon-width  mt-1"></i> Home
            </Link>

            <Link to={"/tuiter/explore"} className={`list-group-item ${active === "Explore".toLowerCase() ? "active" : ""}`} >
                <i className="bi bi-hash wd-icon-width  mt-1"></i> Explore
            </Link>
            <Link to={"/"} className={`list-group-item ${active === "Notifications".toLowerCase() ? "active" : ""}`}>
                <i className="bi bi-bell-fill wd-icon-width  mt-1"></i> Notifications
            </Link>
            <Link to={"/"} className={`list-group-item ${active === "Messages".toLowerCase() ? "active" : ""}`} >
                <i className="bi bi-envelope-fill wd-icon-width  mt-1"></i> Messages
            </Link>
            <Link to={"/"} className={`list-group-item ${active === "Bookmarks".toLowerCase() ? "active" : ""}`} >
                <i className="bi bi bi-bookmark-fill wd-icon-width  mt-1"></i> Bookmarks
            </Link>
            <Link to={"/"} className={`list-group-item ${active === "Lists".toLowerCase() ? "active" : ""}`} >
                <i className="bi bi-list-ul wd-icon-width  mt-1"></i> Lists
            </Link>
            <Link to={"/"} className={`list-group-item ${active === "Profile".toLowerCase() ? "active" : ""}`} >
                <i className="bi bi-person-fill wd-icon-width  mt-1"></i> Profile
            </Link>

            <Link to={"/"} className={`list-group-item ${active === "More".toLowerCase() ? "active" : ""}`} >
                <i className="bi bi-filter-circle-fill wd-icon-width  mt-1"></i> More
            </Link>

        </div>
    )
};
export default NavigationSidebar;