import React from "react";
import { Button } from "@material-tailwind/react";

const Navbar = () => {
    return(
        <div className="flex h-24 rounded-lg w-3/5 items-center justify-center gap-7 shadow-lg z-100">
            <a href="#about">
                <Button 
                    color="black"
                    loading={false}
                    variant="outlined"
                >
                    01. ABOUT ME
                </Button>                
            </a>
            <a href="#experience">
                <Button 
                    color="black"
                    loading={false}
                    variant="outlined"
                    
                >
                    02. EXPERIENCE
                </Button>                
            </a>
            <a href="#projects">
                <Button 
                    color="black"
                    loading={false}
                    variant="outlined"
                >
                    03. PROJECTS 
                </Button>                
            </a>
            <a href="#contact">
                <Button 
                    color="black"
                    loading={false}
                    variant="outlined"
                >
                    04. CONTACT
                </Button>                
            </a>
            <a href="#">
                <Button 
                    color="black"
                    loading={false}
                    variant="gradient"
                >
                    RESUME
                </Button>                
            </a>
        </div>
    );
}

export default Navbar;
