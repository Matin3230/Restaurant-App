import React, { useState} from 'react';
import Menu from "./MenuAPi";
import MenuCard from './MenuCard';
import Navbar from "./NavBar";
import "./style.css";

const uniqueList = [
    ...new Set(
        Menu.map((currEle) => {
            return currEle.category;
        })
    ),
    "All",
];

console.log(uniqueList);

const Restaurants = () => {
    
    const [menuData, SetMenuData] = useState(Menu);
    const [MenuList, SetMenuList] = useState(uniqueList);

    const filterItem = (category) => { 
        if (category === "All")
        {
            SetMenuData(Menu);   
            return;
        }

        const updatedList = Menu.filter((currEle) => {
            return currEle.category === category;
        });

        SetMenuData(updatedList);
    }

  return (
      <>
          <Navbar filterItem={filterItem} MenuList={ MenuList} />
          <MenuCard menuData={menuData} />
    </>
  )
}

export default Restaurants
