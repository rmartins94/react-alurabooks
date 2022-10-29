import logo from '../../img/logo.svg';
import './estilo.css';

function Logo ()  {
    return (
        <div className='logo'>
            <img src={logo} alt='logo' />
            <p><strong>Alura</strong>Books</p>
        </div>
    )
}

export default Logo;