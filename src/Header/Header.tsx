import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


const Header = ({title}:{title: string})=>{

    return (
        <>
        <hr/>
        <h1 className="mb-3" style={{textAlign: "center"}}>{title}</h1>
        <hr/>
        </>
    )
}

export default Header;