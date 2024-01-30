import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "..";



const navItems = [
    {  path:'/about',text:'About'    },
    {  path:'/princing',text:'Princing' },
    {  path:'/contact',text:'Contact'  }
]


export const NavBar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={"/"} className="flex items-center">
      <HomeIcon size={24} className="mr-2"/>
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

{
    navItems.map( navItem => (

        <ActiveLink key={navItem.path} {...navItem} />

    ))
}
   
    </nav>
  );
};
