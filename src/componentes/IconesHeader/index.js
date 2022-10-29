import './estilo.css'
import perfil from '../../img/perfil.svg'
import sacola from '../../img/sacola.svg'

const icones = [perfil, sacola]

function IconesHeader (){
    return (
        <ul className='icones'>
            {icones.map((icone) => (
                <li className='icones__item'><img src= {icone} alt = 'icones'></img></li>
            ))}
        </ul>


    )
}

export default IconesHeader;