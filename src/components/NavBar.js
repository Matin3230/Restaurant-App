import React from "react";

const NavBar = ({filterItem, MenuList}) => {

    return (

        <>
            <nav className="navbar">
                <div className="btn-group">

                    {
                        MenuList.map((currEle) => { 
                            return (

                                <button className="btn-group__item" onClick={() => filterItem(currEle)} key={currEle.id}>{currEle}</button>
                            );
                        })  
                    }
                </div>
            </nav>
        
        </>
    );
};

export default NavBar;