import React from 'react';
import { useSelector } from 'react-redux';

import { GrClose } from "react-icons/gr";
import { AiOutlinePlus } from "react-icons/ai";

const Sidebar = () => {
    const [visibilityCategories, setVisibilityCategories] = React.useState(false);
    
    const { categories } = useSelector(({categoriesReducer}) => categoriesReducer)
    // console.log(result)

    return (
        <div className='sidebar'>
            <div className="sidebar__title">
             <div>CATEGORIES</div>
             <div className="sidebar__icons" onClick={()=> setVisibilityCategories(!visibilityCategories)}> {visibilityCategories ? <GrClose className="sidebar__close-icon"/>:<AiOutlinePlus lassName="sidebar__close-icon"/>}</div>
            </div>
            {visibilityCategories ? <div>
                {
                    categories.map((item) => (
                        <div className="sidebar__checkbox">
                            <input type="checkbox" name={item.slug} />
                            <label for={item.slug} >{item.title}</label>
                        </div>
                    ))
                }
                
            </div>: null}
        </div>
    );
};

export default Sidebar;