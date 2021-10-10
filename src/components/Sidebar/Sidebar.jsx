import React from 'react';

import { GrClose } from "react-icons/gr";
import { AiOutlinePlus } from "react-icons/ai";

import './sidebar.css';

const Sidebar = () => {
    const [visibilityCategories, setVisibilityCategories] = React.useState(false);
    const categories = [
        {
            label: "All",
        },
        {
            label: "All",
        }
    ]
    return (
        <div className='sidebar'>
            <div className="sidebar__title">
             <div>CATEGORIES</div>
             <div className="sidebar__icons" onClick={()=> setVisibilityCategories(!visibilityCategories)}> {visibilityCategories ? <GrClose className="sidebar__close-icon"/>:<AiOutlinePlus lassName="sidebar__close-icon"/>}</div>
            </div>
            {visibilityCategories ? <div>
                {
                    categories.map((item) => (<div className="sidebar__checkbox"><input type="checkbox" /> <label>{item.label}</label></div>))
                }
                
            </div>: null}
        </div>
    );
};

export default Sidebar;