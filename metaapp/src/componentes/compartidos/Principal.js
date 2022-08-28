import estilos from './Principal.module.css';
import Vinculo from './Vinculo';
import { ReactComponent as ListaSVG } from '../../img/lista.svg';
import { ReactComponent as CrearSVG } from '../../img/crear.svg';

function Principal({ children }) {
    return (
      <div className={estilos.principal}>
        <aside className={estilos.aside}>
            <Vinculo
              to="/lista"
              texto="Lista de Metas"
              Icono={ListaSVG}
              />
            <Vinculo 
              to="/nueva" 
              texto="Crear Tarea"
              Icono={CrearSVG}
              />
            
        </aside>
        <main className={estilos.main}>
          {children}
        </main>
      </div>
    );
  }
  
  export default Principal;