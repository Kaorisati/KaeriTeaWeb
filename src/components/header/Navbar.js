
import { Link } from 'react-router-dom';
import './Navbar.css';
import {HiOutlineMenu} from "react-icons/hi"

let areaArray = ['historia','productos','contacto']
function Navbar() {
  return (
    <div className="Navbar"> 
    <HiOutlineMenu color="#274A39" size="1.5rem"/>

          {areaArray.map((area)=>(
        <Link className="ol" key={area} to={'/'+area}>{area} </Link>
      ))}
    </div>
  );
}

export default Navbar;
