import { useEffect, useState, useContext, } from "react";
import { useNavigate, useParams } from 'react-router-dom'
import { Contexto } from "../../servicios/Memoria";
import { actualizarMeta, borrarMeta, crearMeta } from "../../servicios/Pedidos";
import estilos from "./Detalles.module.css";

function Detalles() {

    const { id } = useParams();

    const [form, setForm] = useState ({
        detalles: '',
        eventos: 1,
        periodo: 'semana',
        icono: '🏃🏽',
        meta: 52,
        plazo: '2022-01-01',
        completado: 0,
    });

    const [estado, enviar] = useContext(Contexto);

    const {detalles, eventos, periodo, icono, meta, plazo, completado} = form;

    const onChange = (event, prop) => {
        setForm(estado => ({ ...estado, [prop]: event.target.value}));
    }

    const metaMemoria = estado.objetos[id];

    const navegar = useNavigate();

    useEffect(() => {

        if(!id) return;

        if(!metaMemoria) {
            return navegar('/404');
        }
        setForm(metaMemoria);
    }, [id, metaMemoria, navegar]);

    const crear = async () => {
        const nuevaMeta = await crearMeta();
        enviar({ tipo: 'crear', meta: nuevaMeta});
        navegar('/lista');
    }

    const actualizar =async () => {
        const metaActualizada = await actualizarMeta();
        enviar({ tipo: 'actualizar', meta: metaActualizada});
        navegar('/lista');
    }

    const borrar =async () => {
        const idBorrada = await borrarMeta();
        enviar({ tipo: 'borrar', id: idBorrada});
        navegar('/lista');
    }

    const cancelar = () => {
        navegar('/lista');
    }

    const frecuencias = ["daily", "week", "month", "year"];
    const iconos = ["🧙","🖥️", "🏃🏽", "📚", "💸", "🛒", "📈", "🚬", "🎉", "🎫", "🏀"];
    return (
        <div className="tarjeta">
            <form className="p-4">
                <label className="label">
                Describe your goal
                <input 

                    className="input" 
                    placheholder="ex. 1 hour of excersice" 
                    value={detalles} 
                    onChange = {e => onChange(e,'detalles')}

                />
                </label>
                <label className="label">
                    How often do you want to achieve your goal? <span>(ex. once a day)</span>
                    <div className="flex mb-6">
                        <input
                         className="input mr-6" 
                         type="number" 
                         value={eventos} 
                         onChange = {e => onChange(e,'eventos')}   
                         />
                        <select 
                            className="input" 
                            value={periodo}
                            onChange = {e => onChange(e,'periodo')}
                        >
                        {frecuencias.map(opcion => <option key={opcion} value={opcion}>{opcion}</option>)} 
                        </select>
                    </div>
                </label>
                <label className="label">
                    How many times do you wish to do this goal?
                    <input 

                        className="input" 
                        type='number' 
                        value={meta} 
                        onChange = {e => onChange(e,'meta')}

                    />
                </label>
                <label className="label">
                    Do you have a Deadline?
                    <input 

                        className="input" 
                        type="date" 
                        value={plazo}
                        onChange = {e => onChange(e,'plazo')}

                    />
                </label>
                <label className="label">
                    How many times have you already completed this goal?
                    <input 

                        className="input" 
                        type='number' 
                        value={completado}
                        onChange = {e => onChange(e,'completado')}

                    />
                </label>
                <label className="label">
                    Choose an icon for the goal
                    <select 

                        className="input" 
                        value={icono}
                        onChange = {e => onChange(e,'icono')}
                    >
                        {iconos.map(opcion => <option key={opcion} value={opcion}>{opcion}</option>)};
                    </select>
                </label>
            </form>
            <div className={estilos.botones}>
                {!id && <button 
                    className="boton boton--negro"
                    onClick={crear}
                >Create</button>}
                {id && <button 
                    className="boton boton--negro"
                    onClick={actualizar}
                >Update</button>}
                {id && <button 
                    className="boton boton--rojo"
                    onClick={borrar}
                >Delete</button>}
                <button
                 className="boton boton--gris"
                 onClick={cancelar}
                 >Cancel</button>
            </div>
        </div>
    );
}

export default Detalles;