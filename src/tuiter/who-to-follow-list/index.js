import React from "react";
import whoArray from './who.json';
import WhoToFollowListItem from "./who-to-follow-list-item.js";
const WhoToFollowList = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <div className="row">
                    <span className="fs-3 ">Who to follow</span>
                </div>
            </li>
            {
                whoArray.map((who, i) => (
                    <div>
                        <WhoToFollowListItem who={who} key={i} />
                    </div>
                ))}
        </ul>
    );
};

export default WhoToFollowList;