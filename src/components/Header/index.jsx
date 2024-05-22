import logo from '/logo/logo es.png';
import './Header.scss'

const Header = () => {
  return (
    <figure className='header'>
      <img src={logo} alt="Logo" />
    </figure>
  );
};

export default Header;
