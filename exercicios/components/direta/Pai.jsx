import Filho from "./Filho";

export default function Pai(props){
    return (
        <div>
            <Filho nome = 'Eduardo' familia = {props.familia} />
            <Filho nome = 'Edu' {...props} />
        </div>
    )
}