import React, { useState } from 'react'
import MenuCard from './MenuCard'
import './Style.css'
import Menu from './MenuApi'
import logo from './logo.jpg';
import NavBar from './NavBar';
import MainNavBar from './MainNavBar';

const uniqueList = [
    ... new Set(Menu.map((curElem) =>{
        return curElem.category;
    })), "All"
]
console.log(uniqueList)
const Rajputana = () => {

    const [menuData,setMenuData] = useState(Menu);
    const [menuList,setMenuList] = useState(uniqueList);



    const filterItem = (category) => {
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updatedList)

        if(category==="All"){
            setMenuData(Menu);
            return;
        }
    }
  return (
    <>
    
        <MainNavBar logo={logo}/>
        <NavBar filterItem={filterItem} menuList={menuList}/>
        <MenuCard menuData={menuData}/>
    </>
  )
}

export default Rajputana
