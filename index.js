import Formulario from '../Formulario'
import './ListaSuspensa.css'
const ListaSuspensa = (props) => {


    return (
        <div className='lista-suspensa'>
            <label>
                <label>{props.label}</label>
                <select onChange={evento => props.aoAlterado(evento.target.value)}required={props.required} value={props.value}>
                    {props.itens.map(item => <option key={item}>{item}</option>)}
                </select>
            </label>
        </div>

    )

}

export default ListaSuspensa