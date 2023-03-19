
import './Header.css';
import Navbar from './Navbar';
import ImageSlider from './ImageSlider';
import Logo from '../../assets/Logo1.png'

function Header() {
  return (
    <div className="Header">
        <ImageSlider/>
      <img src={ Logo } alt="logo" className='logo' />
    <Navbar/>
    </div>
  );
}

export default Header;