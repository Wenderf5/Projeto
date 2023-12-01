import '../Style/Lista.css'

function Lista(props){
    return(
        <div className='lista'>
            <div className='codigoAnimal'>{props.track.Código_do_Animal}</div>
            <div className='cidade'>{props.track.Cidade}</div>
            <div className='estado'>{props.track.Estado}</div>
            <div className='tipoDeCriação'>{props.track.Tipo_de_Criação}</div>
            <div className='dataDoCio'>{props.track.Data_do_Cio}</div>
        </div>
    )
}
export default Lista