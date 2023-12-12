import "./header.css";
import logoImg from "../../assets/contact-list.png";

const Header = () => {
  return (
    <div className='header'>
      <img src={logoImg} alt='Logo' className='mr-5' />
      <h3>Contact List</h3>
    </div>
  );
};

export default Header;
