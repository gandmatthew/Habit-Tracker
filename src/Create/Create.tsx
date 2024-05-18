import { createContext } from "react";
import { Habitat } from "../assets/habitat/Habitat";
import { Plane } from "../assets/habitat/components/Plane";
import { Navbar } from "../assets/navbar/Navbar";
import "./Create.css"

interface SaplingCoordinatesType {
    x: any;
    y: any;
  }
  
  export const SaplingCoordinates = createContext<SaplingCoordinatesType>({
    x: 0,
    y: 0
  });

export const Create = () => {

    function plantSapling(event: any) {
        console.log("x, y", event.clientX, event.clientY);
    }

    return (
        <div>
            <div className="center__sticky">
                <Navbar></Navbar>
            </div>
            <div className="create__split create__left">
                <Habitat containerHeight="100" containerWidth="100"></Habitat>
            </div>
            <div className="create__split create__right">
                Hello World
            </div>
        </div>
    )
}