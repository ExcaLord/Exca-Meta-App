import estilos from './Encabezado.module.css';
import Vinculo from './Vinculo';
import { ReactComponent as LogoSVG } from '../../img/logo.svg';
import { ReactComponent as PerfilSVG} from '../../img/perfil.svg';

function Encabezado() {
  return (
    <header className={estilos.encabezado}>
      <div className={estilos.contenedor}>
        <LogoSVG className={estilos.logo}/>
        <a className={estilos.titulo} href="/">Metas App</a>
      </div>
      <nav>
      <Vinculo 
        href="/perfil" 
        Icono={PerfilSVG}
        >
      </Vinculo>
      </nav>
    </header>
  );
}

export default Encabezado;