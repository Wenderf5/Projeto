import '../Style/Formulario.css'

function Formulario() {

    return (
        <div className='blocoinpt'>
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h2 className='typ'>Cidade</h2>
                <input type="text" className='tyk' />
            </div>
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h2 className='typ'>Estado</h2>
                <input type="text" className='tyk' />
            </div>
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h2 className='typ'>Tipo de Criação</h2>
                <input type="text" className='tyk' />
            </div>
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h2 className='typ'>Código do Animal</h2>
                <input type="text" className='tyk' />
            </div>
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h2 className='typ'>Data do Cio</h2>
                <input type="text" className='tyk' />
            </div>
        </div>
    )
}
export default Formulario