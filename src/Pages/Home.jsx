import React, { useState } from 'react';
import '../Style/Home.css';
import Formulario from '../components/Formulario';

function Home() {
    const [mostrarBloco3, setMostrarBloco3] = useState(false);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const toggleBloco3 = () => {
        setMostrarBloco3(!mostrarBloco3);
        if (mostrarFormulario == true){
            setMostrarFormulario(false);
        }
    };
    const toggleFormulario = () => {
        setMostrarFormulario(!mostrarFormulario);
    };

    return (
        <div>
            <div className='navBar'>
                <div className='navBar1' style={{ zIndex: '1' }}>
                    <div onClick={toggleBloco3} style={{ cursor: 'pointer' }}>Cadastrar</div>
                    <div style={{ cursor: 'pointer' }}>Relatórios</div>
                    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>Abrir chamados <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAAAXNSR0IArs4c6QAAAmtJREFUWEftWFFSwjAU3Fc4hiicxHIA0RvYnkQ8SesNFA8AnoSOeAzoc17bYGxTGpLiMCP8MSTNdt/b3RcIZ/yhM8aGCzjX6rQy97COxq4PPXbf6yTNTHuM4O4+o4iIkmMPcV7PyBbXyaS+3whutonZ+SDHjcwcv1+nqb69AU7KmQ9p7XiGxzaeL0bp8z8Ex8iYUDQ2AeHxFPbNHCMDcVovR6H0IcY5cAvQ3A5oX+AYWUAcv47SlRz8sIlCAUKEMctvwMf+t3U03g0p6WazD3Ca7Geb6OkwM+WBpcjwaLPWSxABeCqs3G3iZTcbAITJHU/FaO+/ooSZInOZPZk7GphCUQGUr/mAliAY0scT3GKUkJ4eRJy+XaWxDYsMrN5HybQ9fTzAKQfXgQjYH0HQskuVwjy2yMwm7wEu2PJE+mYfbbU8nH3Ga3O5dMglADPTnuB2A4T6QKCY61ZtCVCV1iwMD3D1fiuSQPWc7RRTsW1+GU9wpdlqvaWZcePAIj1qqjwVuNZm1nxMzLZMA14p89XTQTHde1mBA83ckrFSet06lOLN4vEoqzi9TKuN0mpiFGaI8WLM1Wr/SXxOMDTspM3YhMlydtonQXe6+DAHwKTYLuMtXqrK48OW4wHuVzPnFMocV45IbUFehX41WnVfmjzAmS4gRXSJQgcIg0AGy8psRcFbvKgrn51Je4BT/aZmMwaFAXGmC0Avsd0M14w2x3mO563DYiUACniVMxUisJr1fjWsB3M2je+35gLOlT8L5orIsb0fuOIw7FOCOygI3R6IcNPj+a2P0m2nE9xfALI54/LPpg1LpjVnzdw3oSksRouuSx8AAAAASUVORK5CYII=" /></div>
                </div>
                <div className='navBar2' style={{ zIndex: '1' }}>
                    <h1 className='op1'>Pecuária</h1><h1 className='op2'>Play</h1>
                </div>
            </div>
            {mostrarBloco3 && (
                <div className='bloco3'>
                    <span style={{ cursor: 'pointer' }} onClick={toggleFormulario}>Criador</span>
                    <span style={{ cursor: 'pointer' }}>Técnico</span>
                    <span style={{ cursor: 'pointer' }}>Animais</span>
                </div>
            )}

            {mostrarFormulario && ( 
            <div className='formulario'>
                <Formulario />
                <button className='btnEnviar'>Enviar</button>
            </div>)}

        </div>
    );
}

export default Home;