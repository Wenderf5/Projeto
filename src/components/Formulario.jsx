import '../Style/Formulario.css'
import React, { useState } from 'react';

function Formulario({ funcaomsg1 }) {

    const [cidade, setCidade] = useState("");

    const handleCidade = (event) => {
        setCidade(event.target.value);
    }

    const [estado, setEstado] = useState("");

    const handleEstato = (event) => {
        setEstado(event.target.value);
    }
    const [TipoDeCriação, setTipoDeCriação] = useState("");

    const handleTipoDeCriação = (event) => {
        setTipoDeCriação(event.target.value);
    }
    const [CódigoDoAnimal, setCódigoDoAnimal] = useState("");

    const handleCódigoDoAnimal = (event) => {
        setCódigoDoAnimal(event.target.value);
    }
    const [DataDoCio, setDataDoCio] = useState("");

    const handleDataDoCio = (event) => {
        setDataDoCio(event.target.value);
    }

    function Enviar() {
        if (
            cidade !== null && cidade !== undefined && cidade !== "" &&
            estado !== null && estado !== undefined && estado !== "" &&
            TipoDeCriação !== null && TipoDeCriação !== undefined && TipoDeCriação !== "" &&
            CódigoDoAnimal !== null && CódigoDoAnimal !== undefined && CódigoDoAnimal !== "" &&
            DataDoCio !== null && DataDoCio !== undefined && DataDoCio !== ""
        ) {
            fetch("https://api.sheetmonkey.io/form/pkcGggR2TfgAEDED7evRYm", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Cidade: cidade, Estado: estado, Tipo_de_Criação: TipoDeCriação, Código_do_Animal: CódigoDoAnimal, Data_do_Cio: DataDoCio })
            })
            .then(() => {
                
                let inpt1 = document.getElementById("1");
                let inpt2 = document.getElementById("2");
                let inpt3 = document.getElementById("3");
                let inpt4 = document.getElementById("4");
                let inpt5 = document.getElementById("5");
                if (inpt1, inpt2, inpt3, inpt4, inpt5) {
                    inpt1.value = "";
                    inpt2.value = "";
                    inpt3.value = "";
                    inpt4.value = "";
                    inpt5.value = "";
                }
                funcaomsg1();
            });
        }
    }
    


    return (
        <div className='blocoinpt'>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2 className='typ'>Cidade</h2>
                <input id='1' type="text" className='tyk' onChange={handleCidade} />
            </div>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2 className='typ'>Estado</h2>
                <input id='2' type="text" className='tyk' onChange={handleEstato} />
            </div>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2 className='typ'>Tipo de Criação</h2>
                <input id='3' type="text" className='tyk' onChange={handleTipoDeCriação} />
            </div>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2 className='typ'>Código do Animal</h2>
                <input id='4' type="text" className='tyk' onChange={handleCódigoDoAnimal} />
            </div>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2 className='typ'>Data do Cio</h2>
                <input id='5' type="text" className='tyk' onChange={handleDataDoCio} />
            </div>
            <div><button className='btnEnviar' onClick={Enviar}>Enviar</button></div>
        </div>
    )
}
export default Formulario