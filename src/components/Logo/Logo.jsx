import logo from '../../images/logo.svg';
import './Logo.css';
import { URLS } from '../../utils/constants';
import { useHistory } from 'react-router-dom';

function Logo() {
  const history = useHistory();
  function handleClick() {history.push(URLS.LANDING)};
  return (
    <img className='logo' src={logo} alt='Лого' onClick={handleClick}/>
  );    
};

export default Logo;