import { Metadata } from "next";


export const metadata:Metadata = {
 title: 'About',
 description: 'SEO Title',
 keywords:['About Page','Fernando']

};


export default function AboutPage(){
 return (

    <span className="text-7xl">About Page</span>

 )
}