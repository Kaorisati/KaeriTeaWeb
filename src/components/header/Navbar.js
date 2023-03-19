
import { Link } from 'react-router-dom';
import './Navbar.css';
let areaArray = ['historia','productos','contacto']
function Navbar() {
  return (
    <div className="Navbar"> 
          {areaArray.map((area)=>(
        <Link className="ol" key={area} to={'/'+area}>{area} </Link>
      ))}
    </div>
  );
}

export default Navbar;
