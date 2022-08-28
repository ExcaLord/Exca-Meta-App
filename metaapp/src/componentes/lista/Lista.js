import Meta from './Meta'

const listaMock = [{
    "id": '1',
    "detalles": 'Jugar Minecraft 2 horas',
    "periodo": 'day',
    "eventos": 1,
    "icono": '🧙',
    "meta": 365,
    "plazo": '2030-01-01',
    "completado": 5,
},
{
    "id": '2',
    "detalles": 'Estudiar Programacion 3 horas',
    "periodo": 'day',
    "eventos": 3,
    "icono": '🖥️',
    "meta": 365,
    "plazo": '2030-01-01',
    "completado": 40,
},
{
    "id": '3',
    "detalles": 'Estudiar Data Analysis',
    "periodo": 'day',
    "eventos": 2,
    "icono": '📊',
    "meta": 365,
    "plazo": '2030-01-01',
    "completado": 25,
}
];

function Lista() {
    return ( 
        listaMock.map(meta => <Meta {...meta}></Meta>)
     );
}

export default Lista;