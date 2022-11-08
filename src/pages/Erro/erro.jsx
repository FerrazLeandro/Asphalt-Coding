import VLibras from 'vlibras-react';
import './erro.css';

function Erro() {
    return (
        <>
            <div className='erro-container'>
                <VLibras forceOnload={true}/>
                <h1>Erro 404</h1>
                <h3>Pagina não encontrada ❌</h3>
            </div>
        </>
    )
}

export default Erro